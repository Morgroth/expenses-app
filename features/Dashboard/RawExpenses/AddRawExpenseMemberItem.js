import { useEffect, useState } from "react"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { TextInput, Text, View, StyleSheet, Pressable } from "react-native"

import { addMemberToExpense } from "../../../store/reducers/expensesReducer"



const AddRawExpenseMemberItem = (props) => {
    console.log('ADD CALLED')

    const [expenseAmount, setExpenseAmount] = useState('0')
    const [checkboxState, setCheckboxState ] = useState(false)
    const [beginDispatchingExpense,setBeginDispatchingExpense] = useState(props.beginDispatchingExpense)

    console.log(beginDispatchingExpense)

    useEffect(() => {
        if (beginDispatchingExpense === true){
            console.log('effect called')
            if (checkboxState === true ){
                console.log(checkboxState)
                //props.dispatchExpenses({'memberName': props.member,'amount': parseInt(expenseAmount),'expenseName':props.expenseName})
                
            }
            props.expensesReceived
        }
    })

    props.dispatchExpenses(props.index,parseInt(expenseAmount))
    
    const expenseAmountHandler = (expenseAmount) => {
        setExpenseAmount(expenseAmount)
    }

    const checkboxStateHandler = () => {
        setCheckboxState(!checkboxState)
    }



    return (
        <View>
            <View style={styles.flexRow}>
            <BouncyCheckbox isChecked={checkboxState} onPress={checkboxStateHandler} />
            <Text>{props.member}</Text>
            <TextInput onChangeText={expenseAmountHandler} value={expenseAmount}/>
            </View>
        </View>
    )
}

export default AddRawExpenseMemberItem

const styles = StyleSheet.create({
    flexRow:{
        flexDirection : 'row'
    }
})