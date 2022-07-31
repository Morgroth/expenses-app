import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/authReducer'
import groupsReducer from './reducers/groupsReducer'
import expensesReducer from './reducers/expensesReducer'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    groups: groupsReducer,
    expenses: expensesReducer,

  }
})