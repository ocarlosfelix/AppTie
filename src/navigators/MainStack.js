import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import MusicListScreen from '../pages/MusicListScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="MusicList" component={MusicListScreen}/>
            <MainStack.Screen name="Login" component={LoginScreen}/>
            
            

        </MainStack.Navigator>
    )
}