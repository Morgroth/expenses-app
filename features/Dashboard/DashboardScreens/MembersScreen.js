import { useState } from 'react'
import { Pressable, Text, View, FlatList, TextInput } from "react-native"
import { useSelector,useDispatch } from "react-redux"

import { selectGroupByGroupName } from "../../../store/reducers/groupsReducer"
import { addMemberToGroup } from '../../../store/reducers/groupsReducer'
import { selectCurrentMember } from '../../../store/reducers/authReducer'
import { addGroupToMember } from '../../../store/reducers/authReducer'
import { selectAllMembers } from '../../../store/reducers/authReducer'

const MembersScreen = ({route}) => {
    const groupName = route.params.groupName
    const group = (useSelector(state => selectGroupByGroupName(state,groupName)))[0]

    const dispatch = useDispatch()
    //const navigation = useNavigation()

    const [member,setMember] = useState('')
    const username = (useSelector(selectCurrentMember))
    const allMembers = useSelector(selectAllMembers)
    //const user = (useSelector(state => selectAMember(state,username)))[0]
    
    const memberList = group.members

    const renderMemberItem = (itemdata) => {
        const groupMemberUsername = itemdata.item
        return(
            <View>
                <Text>{groupMemberUsername}</Text>
            </View>
        )
    }

    const AddMembersButton = () => {
        if (group.leader === username){
            return (
                <View>
                <TextInput onChangeText={memberAddHandler} placeholder='Member Username' value={member}></TextInput>
                <Pressable onPress={addMemberHandler} >    
                    <View >
                    <Text>Add member</Text>
                    </View>
                </Pressable>
                </View>
            )
        } else {
            return <></>
        }
    }
    const addMemberHandler = () => {
        if ( memberList.filter( memberItem => memberItem === member ).length <= 0 ){
            const requiredMember  = allMembers.filter(memberItem =>  memberItem.username === member)
            if (requiredMember.length > 0 ){
                dispatch(addGroupToMember({groupName: groupName, username:member}))
                dispatch(addMemberToGroup({groupName: groupName, memberName:member}))
                
            } else {
                console.log('Member not found')
            }
        } else {
            console.log('Member already added')
        }
        setMember('')
    }

    const memberAddHandler = (username) => {
        setMember(username)
    }
    console.log('')
    console.log('')
    console.log('STATE')
    console.log(useSelector(state => state))

    

    return (
        <View>
            <Text>{groupName}</Text>
            <AddMembersButton/>
            <View>
                <Text>List of members</Text>
                <FlatList
                data={memberList}
                keyExtractor={(member) => member}
                renderItem={renderMemberItem}
                />
            </View>
        </View>
    )
    

}

export default MembersScreen