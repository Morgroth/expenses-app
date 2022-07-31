import { useState } from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet, FlatList} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import  uuid  from 'react-uuid'
 
import { selectAMember } from '../../store/reducers/authReducer'
import { selectCurrentMember } from '../../store/reducers/authReducer'
import { addGroupToMember } from '../../store/reducers/authReducer'
import { addLeaderToGroup } from '../../store/reducers/groupReducer'
import { selectGroupByGroupName } from '../../store/reducers/groupReducer'


const Items = (props) => {

    const dispatch = useDispatch()

    const [item,setItem] = useState('')
    const username = (useSelector(selectCurrentMember))
    
    const itemList = props.storeItemList

    const renderItem = (itemdata) => {
        const itemName = itemdata.item
        return(
            <Pressable >
                <Text>{itemName}</Text>
            </Pressable>
        )
    }


    const addItemHandler = () => {
        dispatch(addGroupToMember({groupName: group}))
        dispatch(addLeaderToGroup({groupName:group,leaderUsername:user.username}))
        setItem('')
    
    }

    const itemAddHandler = (itemName) => {
        setItem(itemName)
    }

    return (
        <View>
            <View>
                <FlatList
                data={itemList}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                />
            </View>
            <TextInput onChangeText={itemAddHandler} placeholder={props.placeholder} value={item}></TextInput>
            <Pressable onPress={addItemHandler} >    
                <View >
                <Text>{props.addTextContent}</Text>
                </View>
            </Pressable>
        </View>
    )
    
}

export default Items
