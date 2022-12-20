import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React  from 'react'
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.esen}>
        <View>
        <View style={styles.conteiner}>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Operations', { level: 3 })}
            ><Text style={styles.text}>Easy</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Operations', { level: 5 })}
            ><Text style={styles.text}>Middle</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Operations', { level: 7 })}
            ><Text style={styles.text}>Difficult</Text></TouchableOpacity>
        </View>
            <Image source={{ uri: 'https://thumbs.dreamstime.com/b/%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8-29115178.jpg'}} style={{ width: 150, height:150, borderRadius: 15, marginHorizontal: '34%'}}/>
        </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
    },
    conteiner: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 500,
    },
    button: {
        backgroundColor: '#28518a',
        width: '40%',
        padding: 10,
        borderRadius: 20,
    },
    esen: {
        backgroundColor: '#19454a',
        width: '100%',
        height: '100%',
    }
})