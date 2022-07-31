import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MembersScreen from './DashboardScreens/MembersScreen'
import CalculatedExpensesScreen from './DashboardScreens/CalculatedExpensesScreen'
import RawExpensesScreen from './DashboardScreens/RawExpensesScreen' 


const GroupItem = ({route}) => {
    const groupName = route.params.groupName
    
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            sceneContainerStyle: { backgroundColor: '#3f2f25' },
            drawerContentStyle: { backgroundColor: '#351401' },
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1',
        }}
        >
        <Tab.Screen
            name="MembersScreen"
            component={MembersScreen}
            initialParams={{
                'groupName':groupName,
            }}
            options={{
                title: 'All members',
            }}
        />
        <Tab.Screen
            name="RawExpensesScreen"
            component={RawExpensesScreen}
            options={{
                title: 'Expenses '
            }}
            initialParams={{
                'groupName':groupName,
            }}
        />
        <Tab.Screen
            name="CalculatedExpensesScreen"
            component={CalculatedExpensesScreen}
            options={{
                title: ' Settle Expenses'
            }}
            initialParams={{
                'groupName':groupName,
            }}
        />
        </Tab.Navigator>
  )
}
    


export default GroupItem