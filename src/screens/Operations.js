import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Operations = ({route}) => {
    const level = route.params.level
    console.log(level);



    const navigation = useNavigation();
    return (
        <View style={styles.conteiner}>
            <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('Test', { level: level, operation: '+'})}
            >
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('Test', { level: level, operation: '-' })}
            >
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('Test', { level: level, operation: '*' })}
            >
                <Text style={styles.text}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('Test', { level: level, operation: '/' })}
            >
                <Text style={styles.text}>/</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Operations

const styles = StyleSheet.create({
    text:{
        fontSize: 100,
        color: '#8cb0e6'
    },  
    card: {
        backgroundColor: '#19454a',
        width: '35%',
        height: '35%',
        marginTop: 50,
        borderWidth: 10,
        borderRadius: 30,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    conteiner: {
        width:'100%',
        height: '60%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
})