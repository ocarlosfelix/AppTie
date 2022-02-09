import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import PedirMusicaScreen from '../pages/PedirMusicaScreen';
import HomeScreen from '../pages/HomeScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator 
            screenOptions={{
            headerShown: false
          }}>
            
            <MainStack.Screen name="Login" component={LoginScreen}/>
            <MainStack.Screen name="Home" component={HomeScreen}/>
            <MainStack.Screen name="PedirMusica" component={PedirMusicaScreen}/>
            

        </MainStack.Navigator>
    )
}