import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = props => {
    return(
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
}
export default Button

const styles = StyleSheet.create({
    text:{
        color: '#F4F6F8',
        fontSize: 36,
        fontFamily: 'Ubuntu-Regular',
        textAlign: 'center'
    }
})