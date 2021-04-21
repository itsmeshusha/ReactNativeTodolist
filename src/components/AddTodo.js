import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Alert, Keyboard} from 'react-native'
import {AntDesign} from '@expo/vector-icons'


export const AddTodo = (props) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            props.onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Field cant be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={(text) => setValue(text)}
                       value={value}
                       placeholder={'What to do?'}
                       autoCorrect={false}
                       autoCapitalize={'none'}
            />
            <AntDesign.Button onPress={pressHandler} name={'pluscircleo'}>
                Add
            </AntDesign.Button>
            {/*<Button title={"Add"} onPress={pressHandler}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000'
    }
})