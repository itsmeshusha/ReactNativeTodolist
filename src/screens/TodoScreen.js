import React, {useState} from 'react'
import {StyleSheet, View, Button} from "react-native";
import {FontAwesome, AntDesign} from '@expo/vector-icons'
import {THEME} from '../theme'
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppBoldText} from "../components/ui/AppBoldText";
import {AppButton} from "../components/ui/AppButton";

export const TodoScreen = (props) => {
    const [modal, setModal] = useState(false)

    const saveHandler = (title) => {
        props.onSave(props.todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal value={props.todo.title}
                       visible={modal}
                       onCancel={() => setModal(false)}
                       onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <AppBoldText style={styles.title}>{props.todo.title}</AppBoldText>
                <AppButton onPress={() => setModal(true)} color={THEME.MAIN_COLOR}>
                    <FontAwesome name={'edit'} sixe={20} color={'#fff'} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={props.goBack}>
                        <AntDesign name={'back'} size={20} color={'#fff'} />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => props.onRemove(props.todo.id)}>
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
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})