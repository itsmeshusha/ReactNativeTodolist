import React from 'react'
import {StyleSheet, View, TextInput, Button, Modal} from "react-native";
import {THEME} from "../theme";

export const EditModal = (props) => {
    return (
        <Modal visible={props.visible} animationType={"slide"} transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                           placeholder={'Enter name'}
                           autoCapitalize={"none"}
                           autoCorrect={false}
                           maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title={'Cancel'} onPress={props.onCancel} color={THEME.DANGER_COLOR}/>
                    <Button title={'Save'}/>
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