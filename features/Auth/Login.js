import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { loginCurrentUser } from '../../store/reducers/authReducer'
import { selectAllMembers } from '../../store/reducers/authReducer'

const Login = ({navigation}) => {
    const dispatch = useDispatch()

    const [username,setUsername] = useState('V')
    const [password,setPassword] = useState('1')


    const usernameHandler = (username) => {
        setUsername(username)
    }

    const passwordHandler = (password) => {
        setPassword(password)
    }


    const loginHandler = () => {
        dispatch(loginCurrentUser({username:username,password:password}))
        navigation.navigate('Dashboard')
    }

    const signUpNavigator = () => {
        navigation.navigate('SignUp')
      }


    return (
        <View>
            <TextInput onChangeText={usernameHandler} style={styles.input} placeholder='Username' value={username}/>
            <TextInput onChangeText={passwordHandler} style={styles.input} placeholder='Password' value={password} />
            <Pressable onPress={loginHandler}>
                <Text>Login</Text>
            </Pressable>
            <Pressable onPress={signUpNavigator}>
                <Text>Not yet registered? Click here to register!!</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input : {
        width: 200,
        height: 20
    }
})