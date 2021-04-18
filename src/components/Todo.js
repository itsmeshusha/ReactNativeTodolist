import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {AppText} from "./ui/AppText";

export const  Todo = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7}
                          onPress={() => props.onOpen(props.todo.id)}
                          onLongPress={() => props.onRemove(props.todo.id)}>
        <View style={styles.todo}>
            <AppText >{props.todo.title}</AppText>
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