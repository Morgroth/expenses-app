import { useState } from "react"
import { Text, View, Pressable, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import AddRawExpense from "../RawExpenses/AddRawExpense"

const RawExpensesScreen = ({route}) => {

    const groupName = route.params.groupName

    console.log(useSelector(state => state.expenses))

    return(
        <View>
            <Text>Expenses</Text>
            <AddRawExpense style={styles.addRawExpense} groupName={groupName}/>
        </View>
    )
}

export default RawExpensesScreen

const styles = StyleSheet.create({
    addRawExpense:{
        height:200,
        width:200,
        backgroundColor:'red'
    }
})