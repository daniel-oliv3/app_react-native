import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home';
import Visualizar from './pages/Visualizar';

export default function Routes(){

    const screenOptionsStyle = {
        headerStyle: {
            backgroundColor: '#121721'
        },
        headerTintColor: '#b02ab7' 
    }



    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionsStyle}>
                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{headerTitle: "Listar os Orçamento"}}
                />
                <Stack.Screen 
                name="Visualizar" 
                component={Visualizar} 
                options={{headerTitle: "Visualizar os Orçamento"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}