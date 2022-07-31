import { View, TextInput, StyleSheet,Pressable,Text } from 'react-native'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { addMember,signupErrorReset } from '../../store/reducers/authReducer'

const SignUp = ({navigation}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    

    const usernameHandler = (username) => {
        setUsername(username)
    }

    const passwordHandler = (password) => {
        setPassword(password)
    }

    const loginHandler = () => {
        dispatch(addMember({username:username,password:password}))
        navigation.navigate('Login')  
        
    }

    return (
        <View>
            <TextInput onChangeText={usernameHandler} style={styles.input} placeholder='Username' value={username}/>
            <TextInput onChangeText={passwordHandler} style={styles.input} placeholder='Password' value={password} />
            <Pressable onPress={loginHandler}>
                <Text>SignUp</Text>
            </Pressable>
        </View>
    )
        
}

export default SignUp

const styles = StyleSheet.create({
    input : {
        width: 200,
        height: 20
    }
})