import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import { NavigatorScreenParams } from '@react-navigation/native'
import TabsNavigator, { TabStackParamsList } from './TabsNavigator'

export type RootStackParamsList = {
    TabStack: NavigatorScreenParams<TabStackParamsList>,
    DetailsScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamsList>()

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='TabStack' component={TabsNavigator}>

            </RootStack.Screen>
        </RootStack.Navigator>
    )
}

export default RootNavigator