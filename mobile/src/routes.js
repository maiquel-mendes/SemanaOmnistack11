import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import incidents from './pages/incidents'
import detail from './pages/detail'

export default function Routes () {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name = 'incidents' component={incidents}/>
                <AppStack.Screen name = 'detail' component={detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}