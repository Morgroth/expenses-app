import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import Groups from './GroupsList'

const Dashboard = () => {

    return (
    <View>
        <Text>Welcome to Dashboard!</Text>
        <Groups/>
    </View>
    )
}

export default Dashboard