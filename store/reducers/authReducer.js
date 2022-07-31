import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    members : [{username:'V',password:'1',groups:[]},
               {username:'A',password:'1',groups:[]},
               {username:'B',password:'1',groups:[]},
               {username:'C',password:'1',groups:[]}],
    currentUser :'',
    signupError : false
  },
  reducers: {
    addMember: (state, action) => {
      const user = state.members.filter((member) => {
        return member.username === action.payload.username
      })

      if (user.length>0){
          console.log(' Username already taken ')
          state.signupError=(!state.signupError)
        }
     else {
      state.members.push({username:action.payload.username,password:action.payload.password,groups:[]})
    }
      
    },
    loginCurrentUser: (state, action) => {
      const user = state.members.filter((member) => {
        return member.username === action.payload.username
      })

      if (user.length>0){
        if (action.payload.password === user[0].password){
          state.currentUser=action.payload.username
        } else {
          console.log('Invalid password')
        }
    } else {
      console.log('User not found')
    }
    },
    logoutCurrentUser: (state, action) => {
      state.currentUser=''
    },
    signupErrorReset : (state,action) => {
      state.signupError=false
    },
    addGroupToMember : (state,action) => {
      const user = state.members.filter((member) => {
        return member.username === action.payload.username
      })[0]

      let userPos = state.members.indexOf(user)
      state.members[userPos].groups.push(action.payload.groupName)
      
    }
  }
})

export const addMember = authSlice.actions.addMember
export const loginCurrentUser = authSlice.actions.loginCurrentUser
export const logoutCurrentUser = authSlice.actions.logoutCurrentUser
export const signupErrorReset = authSlice.actions.signupErrorReset
export const addGroupToMember = authSlice.actions.addGroupToMember

export const selectAllMembers = (state) => state.auth.members
export const selectCurrentMember = (state) => state.auth.currentUser
export const selectAMember = (state,username) => state.auth.members.filter((member) => {
  return member.username === username
})

export default authSlice.reducer;