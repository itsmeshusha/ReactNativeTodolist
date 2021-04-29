import React, {useContext, useState} from 'react'
import {StyleSheet, View, Dimensions} from "react-native";
import {FontAwesome, AntDesign} from '@expo/vector-icons'
import {THEME} from '../theme'
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppBoldText} from "../components/ui/AppBoldText";
import {AppButton} from "../components/ui/AppButton";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";

export const TodoScreen = () => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = title => {
        updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal value={todo.title}
                       visible={modal}
                       onCancel={() => setModal(false)}
                       onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <AppBoldText style={styles.title}>{todo.title}</AppBoldText>
                <AppButton onPress={() => setModal(true)} color={THEME.MAIN_COLOR}>
                    <FontAwesome name={'edit'} size={20} color={'#fff'} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen(null)}>
                        <AntDesign name={'back'} size={20} color={'#fff'} />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
                        <FontAwesome name={'remove'} size={20} color={'#fff'} />
                    </AppButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: Dimensions.get('window').width / 3
    },
    title: {
        fontSize: 20
    }
})