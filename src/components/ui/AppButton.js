import React from 'react'
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'
import {AppBoldText} from "./AppBoldText";
import {THEME} from "../../theme";

export const AppButton = (props) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={props.onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: props.color}}>
                <AppBoldText style={styles.text}>{props.children}</AppBoldText>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
})