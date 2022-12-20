import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Result = () => {
    const navigation = useNavigation()
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [wrongAnswer, setWrongAnswer] = useState('')
    const load1 = async()=>{
        try {
            let ochko = await AsyncStorage.getItem('correctAnswer')
            setCorrectAnswer(ochko)
        }catch (err) {
            alert(err)
        }
    }
    
    const load2 = async()=>{
        try {
            let ochko = await AsyncStorage.getItem('wrongAnswer')
            // console.log(ochko,'qwer');
            setWrongAnswer(ochko)
        }catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        load1()
        load2()
    }, [])
    return (
        <View style={styles.conteiner}>
            <Text style={styles.text1}>Correct answer : {correctAnswer}</Text>
            <Text style={styles.text2}>Wrong answer : {wrongAnswer}</Text>
            <TouchableOpacity style={styles.button}
            onPress={()=>{
                navigation.navigate('Menu')
            }}
            >
                <Text style={styles.text}>Back to menu</Text>
            </TouchableOpacity>
            
        </View>

    )
}

export default Result

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#032b40',
        borderRadius: 15,
        width: '45%',
        padding: 22,
    },
    text1: {
        fontSize: 28,
        color: 'green',
    },
    text2: {
        fontSize: 28,
        color: 'red',
    },
    text: {
        fontSize: 28,
        color: 'white',
    },
    conteiner: {
        flexDirection: 'column',
        width: '100%',
        height: 400,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

})