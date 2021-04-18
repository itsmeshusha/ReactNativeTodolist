import React from 'react'
import { StyleSheet, View } from 'react-native';
import {THEME} from '../theme'
import {AppBoldText} from "./ui/AppBoldText";

export const  Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <AppBoldText style={styles.text}>{props.title}</AppBoldText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10

    },
    text: {
        color: 'white',
        fontSize: 20
    }
})