import { createSlice } from "@reduxjs/toolkit"

const groupSlice = createSlice({
    name : 'groups',
    initialState : {
        groupNames:[{'groupName':'Test','members':['V'],'leader':'V'}],
    },
    reducers :{

        addLeaderToGroup : (state,action) => {
            state.groupNames.push({'groupName' : action.payload.groupName,'members':[action.payload.leaderUsername],'leader':action.payload.leaderUsername})
        },
        addMemberToGroup : (state,action) => {
            const group = state.groupNames.filter(group => group.groupName === action.payload.groupName)
            const groupPos = state.groupNames.indexOf(group[0])
            state.groupNames[groupPos].members.push(action.payload.memberName)
        }
    }
})

export const addLeaderToGroup = groupSlice.actions.addLeaderToGroup
export const addMemberToGroup = groupSlice.actions.addMemberToGroup

export const selectAllGroups = (state) => state.groups.groupNames
export const selectGroupByGroupName = ( state, groupName) => state.groups.groupNames.filter(group => group.groupName === groupName)
export const selectMembersByGroupName = (state, groupName) => state.groups.groupNames.filter(group => group.groupName === groupName)[0].members

export default groupSlice.reducer