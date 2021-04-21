import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal, Alert} from "react-native";
import {THEME} from "../theme";
import {AppButton} from "./ui/AppButton";

export const EditModal = (props) => {
    const [title, setTitle] = useState(props.value)

    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert(
                'Error',
                `Min title length less than 3 symbols. ${title.trim().length} symbols now`
            )
        } else {
            props.onSave(title)
        }
    }

    return (
        <Modal visible={props.visible} animationType={"slide"} transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                           value={title}
                           onChangeText={setTitle}
                           placeholder={'Enter name'}
                           autoCapitalize={"none"}
                           autoCorrect={false}
                           maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton onPress={props.onCancel} color={THEME.DANGER_COLOR}>Cancel</AppButton>
                    <AppButton onPress={saveHandler} color={THEME.MAIN_COLOR}>Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})