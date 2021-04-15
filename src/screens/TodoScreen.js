import React, {useState} from 'react'
import {StyleSheet, View, Text, Button} from "react-native";
import {THEME} from '../theme'
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = (props) => {
    const [modal, setModal] = useState(false)
    return (
        <View>
            <EditModal visible={modal} onCancel={() => setModal(false)}/>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{props.todo.title}</Text>
                <Button title={'Edit'} onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={'Back'} color={THEME.GREY_COLOR} onPress={props.goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title={'Delete'} color={THEME.DANGER_COLOR} onPress={() => props.onRemove(props.todo.id)}/>
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