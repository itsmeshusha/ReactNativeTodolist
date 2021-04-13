import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Navbar} from './src/components/Navbar'
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {id: '1', title: 'Learn Javascript'},
        {id: '2', title: 'Learn React Native'}
    ])

    const addTodo = (title) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }

    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    let content = <MainScreen addTodo={addTodo}
                              todos={todos}
                              removeTodo={removeTodo}
                              openTodo={setTodoId}/>

    if (todoId) {
        const selectedTodo = todos.find(td => td.id === todoId)
        content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>
    }

    return (
        <View>
            <Navbar title={"Todo App"}/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});
