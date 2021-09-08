import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

 const HomeScreen = props => {
    return(
        <View style={styles.container}>
        <Text  style={styles.logo}>CalisTimer</Text>
        <Button style={styles.btn} onPress={() => props.navigation.navigate("EMOM")}>EMOM</Button>
        <Button style={styles.btn} onPress={() => props.navigation.navigate("AMRAP")}>AMRAP</Button>
        <Button style={styles.btn} onPress={() => props.navigation.navigate("ISOMETRIA")}>ISOMETRIA</Button>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#15122B'
    },
    logo:{
        fontFamily: 'Ubuntu-Bold',
        fontSize:48, 
        textAlign: 'center', 
        color:'#FFFFFF',
        marginTop: 111,
        marginBottom: 150
    },
   btn: {
    padding: 20
   },
   text:{
    color: '#F4F6F8',
    fontSize: 24,
    fontFamily:'Ubuntu-Regular'
    
}
})