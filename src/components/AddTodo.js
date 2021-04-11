import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export const AddTodo = () => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button title={"Add"} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000'
    }
})