import { createSlice } from "@reduxjs/toolkit"

const expenseSlice = createSlice({
    name : 'expenses',
    initialState : {
        expenseNames:[{'expenseName':'Test','membersAndAmount':[{'memberName':'','amount': 0}],'totalAmount':0}],
    },
    reducers :{
        addExpense:(state,action) => {
            state.expenseNames.push({'expenseName':action.payload.expenseName,'membersAndAmount':[],'totalAmount':action.payload.totalAmount})
            //state.expenseNames[-1].membersAndAmount.push[{'memberName':action.payload.memberName,'amount':action.payload.amount}]
        },
        addMemberToExpense : (state,action) => {
            const expense = state.expenseNames.filter(expense => expense.expenseName === action.payload.expenseName)
            const expensePos = state.expenseNames.indexOf(expense[0])
            state.expenseNames[expensePos].membersAndAmount.concat({'membersAndAmount':action.payload.memberAndAmountList})
        }
    }
})

export const addExpense = expenseSlice.actions.addExpense
export const addMemberToExpense = expenseSlice.actions.addMemberToExpense

export const selectAllExpenses = (state) => state.expense.expenseNames
export const selectExpenseByexpenseName = ( state, expenseName) => state.expenses.expenseNames.filter(expense => expense.expenseName === expenseName)

export default expenseSlice.reducer


