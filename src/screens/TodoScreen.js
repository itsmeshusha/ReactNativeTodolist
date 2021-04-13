import React from 'react'
import {StyleSheet, View, Text, Button} from "react-native";

export const TodoScreen = (props) => {
    return (
        <View>
            <Text>{props.todo.title}</Text>
            <Button title={'Back'} onPress={props.goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})