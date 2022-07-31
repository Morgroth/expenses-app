import { Pressable, View, Text } from "react-native"
import { FlatList, TextInput } from "react-native-gesture-handler"
import { useDispatch, useSelector, } from "react-redux"
import { useEffect, useState } from 'react'

import { addExpense, addMemberToExpense } from "../../../store/reducers/expensesReducer"
import { selectMembersByGroupName } from "../../../store/reducers/groupsReducer"
import AddRawExpenseMemberItem from "./AddRawExpenseMemberItem"
import { render } from "react-dom"


const AddRawExpense = (props) => {

    const dispatch = useDispatch()
    const groupName = props.groupName
    const allGroupMembers = useSelector(state => selectMembersByGroupName(state,groupName))
    const [expenseName,setExpenseName] = useState('')
    const [expenseTotalAmount,setExpenseTotalAmount] = useState('')
    const [createdExpense,setCreatedExpense] = useState(false)
    const [expenseDetailed,setExpenseDetailed] = useState(false)
    //const [expensesReceived,setExpensesReceived] = useState(false)

    let receivedExpenses = 0
    let requiredExpenses = allGroupMembers.length
    

    let expenseMemberAndAmountList = []

    const expensesReceivedHandler = () => {
        receivedExpensesCounter++
        //console.log(receivedExpensesCounter)
        if ( receivedExpenses === requiredExpenses ){
            console.log('Dispatching expenses')
            dispatch(addMemberToExpense({'memberAndAmountList':expenseMemberAndAmountList,'expenseName':expenseName}))
            console.log('Dispatched')
            setExpenseName('')
            setExpenseTotalAmount('')
            setExpenseDetailed(false)
        }
    }


    const expenseNameHandler = (expense) => {
        setExpenseName(expense)
    }

    // useEffect(() => {
    //     if (expenseDetailed === true ){
            

    //     }
    // },[expenseDetailed])

    let test = []

    const testHandler = (index,item) => {
        console.log(index)
        console.log(item)
        test[index] = item
        console.log('test')
        console.log(test)
    }

    const expenseTotalAmountHandler = (expenseAmount) => {
        setExpenseTotalAmount(expenseAmount)
    }


    const fillExpense = () => {
        console.log('pressed')
        setExpenseDetailed(true)
        setCreatedExpense(false)
        console.log(createdExpense)
    }


    const renderMemberItem = (itemdata) => {
        const member = itemdata.item
        console.log(itemdata)
        return(
            <View>
                <AddRawExpenseMemberItem
                member = {member}
                beginDispatchingExpense = {expenseDetailed}
                dispatchExpenses = {expenseDispatchFiller}
                expensesReceived = {expensesReceivedHandler}
                index={itemdata.index}
                />
            </View>
        )
    }

    const expenseDispatchFiller = (memberName,amount) => {
        //dispatch(addMemberToExpense({'amount':parseInt(amount),'memberName':memberName}))
        //console.log(expenseMemberAndAmountList)
        testHandler(memberName,amount)
    }

    const ExpenseInitializer = () => {
        if (!createdExpense){
            return(
                <View>
                    <Text>Fill Details for New Expense</Text>
                    <TextInput onChangeText={expenseNameHandler} value={expenseName} placeholder='Expense Name'/>
                    <TextInput onChangeText={expenseTotalAmountHandler} value={expenseTotalAmount} placeholder='Total Amount'/>
                    <Pressable onPress={createNewExpense}>
                        <Text>Create new Expense</Text>
                    </Pressable>
            </View>
            )
        } else {
            return null
        }
    }

    const ExpenseFiller = () => {
        //console.log('ahhhhhh')
        console.log(createdExpense)
        if (createdExpense){
            return(
                <View>
                    <Text>Fill Expense Details</Text>
                    <FlatList
                        data={allGroupMembers}
                        keyExtractor={(member) => member}
                        renderItem={renderMemberItem}
                        />
                    <Pressable onPress={fillExpense}>
                        <Text>Add expense</Text>
                    </Pressable>    
            </View>
            )
        } else {
            return null
        }
    }

    console.log(expenseMemberAndAmountList)

    const createNewExpense = () => {
        dispatch(addExpense({'expenseName':expenseName,'totalAmount':parseInt(expenseTotalAmount)}))
        console.log('Expense Created')
        setCreatedExpense(true)
    }


    return(
        <View>
            <ExpenseInitializer/>
            <ExpenseFiller/>
        </View>
    )
}

export default AddRawExpense