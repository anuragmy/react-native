import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from '@expo/vector-icons/MaterialIcons';


export type TabStackParamsList = {
    Home: undefined,
    Cart: undefined,
    Payment: undefined,
    Profile: undefined,
}

const TabStack = createBottomTabNavigator<TabStackParamsList>();


const TabsNavigator = () => {
    return (
        <TabStack.Navigator screenOptions={{
            tabBarShowLabel: false,
        }}>
            <TabStack.Screen name="Home" component={Example} options={{
                headerShown: false,
                tabBarIcon(props) {
                    return <Icons name="home" {...props} />;
                }
            }} />
            <TabStack.Screen name="Cart" component={Example}
                options={{
                    headerShown: false,
                    tabBarIcon(props) {
                        return <Icons name="shopping-cart" {...props}  />;
                    }
                }}
            />
            <TabStack.Screen name="Payment" component={Example}
                options={{
                    headerShown: false,
                    tabBarIcon(props) {
                        return <Icons name="payment" {...props} />;
                    }
                }}
            />
            <TabStack.Screen name="Profile" component={Example}
                options={{
                    headerShown: false,
                    tabBarIcon(props) {
                        return <Icons name="person" {...props} />;
                    }
                }}
            />
        </TabStack.Navigator>
    )
}

const Example = () => {
    return <View />
}

export default TabsNavigator