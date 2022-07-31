import { useState } from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet, FlatList} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import  uuid  from 'react-uuid'
 
import { selectAMember } from '../../store/reducers/authReducer'
import { selectCurrentMember } from '../../store/reducers/authReducer'
import { addGroupToMember } from '../../store/reducers/authReducer'
import { addLeaderToGroup } from '../../store/reducers/groupsReducer'
import { selectGroupByGroupName } from '../../store/reducers/groupsReducer'


const Groups = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [group,setGroup] = useState('')
    const username = (useSelector(selectCurrentMember))
    const user = (useSelector(state => selectAMember(state,username)))[0]
    
    const groupList = user.groups

    const groupPressHandler = (groupName) => {
        navigation.navigate('GroupItem',{
            groupName : groupName,
        })
    }

    const renderGroupItem = (itemdata) => {
        const groupName = itemdata.item
        
        // const group = () => (useSelector(state => selectGroupByGroupName(state,groupName)))[0]
        // console.log(group)
        // console.log(1)
        // console.log(group())
        // console.log(2)
     
        return(
            <Pressable onPress={groupPressHandler.bind(this,groupName)} >
                <Text>{groupName}</Text>
            </Pressable>
        )
    }


    const addGroupHandler = () => {
        dispatch(addGroupToMember({groupName: group,username: username}))
        dispatch(addLeaderToGroup({groupName:group,leaderUsername:user.username}))
        setGroup('')
    
    }

    const groupAddHandler = (groupName) => {
        setGroup(groupName)
    }

    return (
        <View>
            <TextInput onChangeText={groupAddHandler} placeholder='GroupName' value={group}></TextInput>
            <Pressable onPress={addGroupHandler} >    
                <View >
                <Text>Add group</Text>
                </View>
            </Pressable>
            <View>
                <Text>List of groups</Text>
                <FlatList
                data={groupList}
                keyExtractor={(group) => group}
                renderItem={renderGroupItem}
                />
            </View>
        </View>
    )
    
}

export default Groups

const styles = StyleSheet.create({
    groupItem:{
        margin:25
    }
})