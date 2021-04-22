import React, {useState, useContext} from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import {Navbar} from './components/Navbar'
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";

export const MainLayout = () => {
    const todosContext = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([])

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
                              todos={todosContext.todos}
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
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20
    },
});