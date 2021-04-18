import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {Navbar} from './src/components/Navbar'
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

async function loadApp() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false)
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {id: '1', title: 'Learn Javascript'},
        {id: '2', title: 'Learn React Native'}
    ])

    if (!isReady) {
        return <AppLoading startAsync={loadApp}
                           onError={err => console.log(err)}
                           onFinish={() => setIsReady(true)}
        />
    }

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
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            'Delete task',
            `Are you sure to delete "${todo.title}" task?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    }
                }
            ],
            {cancelable: false}
        )

    }

    const updateTodo = (id, title) => {
        setTodos(state => state.map(todo => {
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }))
    }

    let content = <MainScreen addTodo={addTodo}
                              todos={todos}
                              removeTodo={removeTodo}
                              openTodo={setTodoId}/>

    if (todoId) {
        const selectedTodo = todos.find(td => td.id === todoId)
        content = <TodoScreen onRemove={removeTodo}
                              goBack={() => setTodoId(null)}
                              todo={selectedTodo}
                              onSave={updateTodo}
        />
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
