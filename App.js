import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'

import { store } from './store/store'
import Login from './features/Auth/Login'
import SignUp from './features/Auth/SignUp'
import Dashboard from './features/Dashboard/Dashboard'
import GroupItem from './features/Dashboard/GroupItem';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: 'Sign up Now',
              }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                title: 'Welcome'
              }}
            />
            <Stack.Screen
              name="GroupItem"
              component={GroupItem}
              options={{
                title: 'Group',
                headerShown:false
              }}
            />
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
