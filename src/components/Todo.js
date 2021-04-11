import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const  Todo = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
                          onPress={() => console.log('Pressed', props.todo.id)}
                          onLongPress={() => props.onRemove(props.todo.id)}>
        <View style={styles.todo}>
            <Text >{props.todo.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})