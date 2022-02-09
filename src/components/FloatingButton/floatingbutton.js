import React from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import {AntDesign, Entypo } from '@expo/vector-icons'

export default class FloatingButton extends React.Component {
    
    animation = new Animated.Value (0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start();

        this.open= !this.open;
    };
    
    render() {

    const plusStyle = {
        transform: [
            { scale: this.animation},
            {
                translateY: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80]
                })
            }
        ]
    };

    const creditStyle = {
        transform: [
            { scale: this.animation},
            {
                translateY: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140]
                })
            }
        ]
    };

    const typingStyle = {
        transform: [
            { scale: this.animation},
            {
                translateY: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -200]
                })
            }
        ]
    };

    const rotation = {
        transform: [
        {
            rotate: this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "45deg"]
            })
        }
        
        
    ]
};



        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, typingStyle ]}>
                        <Entypo name="typing" size={20} color="#154a02" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, creditStyle ]}>
                        <Entypo name="credit" size={20} color="#154a02" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary, plusStyle ]}>
                        <Entypo name="plus" size={20} color="#154a02" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name="ellipsis1" size={24} color="#9dbb39" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        position:"absolute",
    },
    button:{
        position:"absolute",
        width:60,
        height:60,
        borderRadius: 60/ 2,
        alignItems:"center",
        justifyContent:"center",
        shadowRadius:10,
        shadowColor:"#000",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor:"#154a02",
    },
    secondary:{
        width: 48,
        height:48,
        borderRadius: 48/2,
        backgroundColor: "#9dbb39"
    }

})