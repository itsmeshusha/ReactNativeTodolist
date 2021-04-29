import React, {useState, useContext} from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import {Navbar} from './components/Navbar'
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext)

    //
    // const removeTodo = (id) => {
    //     const todo = todos.find(t => t.id === id)
    //     Alert.alert(
    //         'Delete task',
    //         `Are you sure to delete "${todo.title}" task?`,
    //         [
    //             {
    //                 text: 'Cancel',
    //                 style: 'cancel'
    //             },
    //             {
    //                 text: 'Delete',
    //                 style: 'destructive',
    //                 onPress: () => {
    //                     setTodoId(null)
    //                     setTodos(prev => prev.filter(todo => todo.id !== id))
    //                 }
    //             }
    //         ],
    //         {cancelable: false}
    //     )
    //
    // }



    return (
        <View>
            <Navbar title={"Todo App"}/>
            <View style={styles.container}>
                {todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20
    },
});