import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Test = ({ route }) => {

    // async storage
    const save1 = async () => {
        try {
            await AsyncStorage.setItem('correctAnswer', String(correctAnswer))
        } catch (err) {
            alert(err)
        }
    }
    const save2 = async () => {
        try {
            await AsyncStorage.setItem('wrongAnswer', String(wrongAnswer))
        } catch (err) {
            alert(err)
        }
    }
    const load2 = async () => {
        try {
            let ochko = await AsyncStorage.getItem('correctAnswer')
            console.log(ochko);
        } catch (err) {
            alert(err)
        }
    }
    const [clock, setClock] = useState(60)
    const navigation = useNavigation();
    const level = route.params.level
    const operation = route.params.operation
    const [example, setExample] = useState([])
    const [tolerance, setTolerance] = useState(false)
    const [value, setValue] = React.useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState(0)
    const [answer, setAnswer] = useState(0)
    const RandomNumber = () => {
        const levelLength = []
        for (let i = 0; i < level; i++) {
            levelLength.push(Math.floor(Math.random() * 100));
        }
        if (operation == '-') {
            levelLength[0] = Math.floor(Math.random() * 500) + 60 * level;
        }
        if (operation == '*') {
            for (let i = 0; i < levelLength.length; i++) {
                levelLength[i] = levelLength[i] % 10 + 2
            }
        }
        if (operation == '/') {
            let per = 1
            for (let i = 0; i < levelLength.length; i++) {
                levelLength[i] = levelLength[i] % 7 + 2
                per = per * levelLength[i]
            }
            levelLength[0] = per
        }
        return levelLength
    }
    const checkAnswer = (answerUser) => {
        let polAnswer
        if (operation == '+') {
            let s = 0
            for (let i = 0; i < example.length; i++) {
                s = s + example[i]
            }
            // console.log(s,'answer')
            polAnswer = s
        }
        if (operation == '-') {
            let s = example[0]
            for (let i = 1; i < example.length; i++) {
                s = s - example[i]
            }
            // console.log(s,'answer')
            polAnswer = s
        }
        if (operation == '*') {
            let s = 1
            for (let i = 0; i < example.length; i++) {
                s = s * example[i]
            }
            // console.log(s,'answer')
            polAnswer = s
        }
        if (operation == '/') {
            let s = example[0]
            for (let i = 1; i < example.length; i++) {
                s = s / example[i]
            }
            // console.log(s,'answer')
            polAnswer = s
        }
        polAnswer == answerUser ? setCorrectAnswer(correctAnswer + 1) : setWrongAnswer(wrongAnswer + 1)
        console.log(answerUser, polAnswer, correctAnswer);
        save1()
        save2()
        // console.log(wrongAnswer);
    }
    useEffect(() => {
        setExample(RandomNumber())
    }, [])
    return (
        <View style={styles.conteiner}>
            {tolerance == false ? <Text></Text>
                : <View style={styles.test}>
                    {
                        example.map((el, id) => {
                            return (
                                id + 1 < example.length ? <Text style={styles.testres} key={id}>{el} {operation} </Text> : <Text style={styles.testres} key={id}>{el}</Text>
                            )
                        })
                    }
                </View>}

            {tolerance == false ? <Text></Text> : <Text style={styles.testres1}>Enter solution</Text>}
            {tolerance == false ? <Text></Text> : <TextInput keyboardType="numeric" style={styles.input} onChangeText={setValue} value={value}></TextInput>}
            <TouchableOpacity

                onPress={() => {
                    setExample(RandomNumber())
                    if (tolerance == false) {
                        setTimeout(() => {
                            navigation.navigate('Result')
                        }, 60000)
                        for (let i = 1; i < 61; i++) {
                            setTimeout(() => {
                                setClock(clock - i)
                            }, 1000 * i)
                        }
                    }
                    setTolerance(true)
                    checkAnswer(value)
                    setValue('')
                    load2()
                }}
            >
                {tolerance == false ? <Text style={styles.start}>Start</Text> : <Text style={styles.textEsen}>Next</Text>}
            </TouchableOpacity>
            {tolerance == false ? <Text></Text> : <Text style={styles.timeout}>{clock}'s</Text>}
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#6aa1bd',
        color: 'white',
        width: '50%',
        padding: 15,
        borderRadius: 12,
        fontSize: 28,
        // marginLeft: '10%',
    },
    start: {
        fontSize: 60,
        color: 'white',
    },
    conteiner: {
        backgroundColor: '#19454a',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    testres: {
        color: 'white',
        fontSize: 24,
    },
    test: {
        marginTop: 40,
        padding: 10,
        flexDirection: 'row',
        // backgroundColor: 'red',
        width: '80%',
        justifyContent: 'center',
    },
    testres1: {
        fontSize: 34,
        margin: 30,
        color: 'white',
    },
    textEsen: {
        fontSize: 38,
        color: '#90b305',
        margin: 30,
    },
    timeout: {
        marginTop: 100,
        width: 145,
        textAlign: 'center',
        fontSize: 52,
        fontWeight: '600',
        color: 'brown',
        padding: 30,
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 30,
    }
})