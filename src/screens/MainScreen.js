import React from 'react'
import {StyleSheet, View, FlatList} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = (props) => {
    return (
        <View>
            <AddTodo onSubmit={props.addTodo}/>

            <FlatList
                keyExtractor={item => item.id.toString()}
                data={props.todos}
                renderItem={({item}) => <Todo todo={item} key={item.id}
                                              onRemove={props.removeTodo}
                                              onOpen={props.openTodo}
                />}
            />
        </View>
    )
}

const styles = StyleSheet.create({})