import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getColor } from '../utils/getThemeColor';

const InputText = (
    { placeholder = "ENTER TEXT", }
) => {
    const { themeMode } = useSelector(state => state.theme);

    const styles = StyleSheet.create({
        input: {
            width: '100%',
            borderWidth: 0.5,
            borderColor: getColor(themeMode).primary,
            backgroundColor: getColor(themeMode).background,
            paddingVertical: 16,
            paddingHorizontal: 16,
            color: getColor(themeMode).primary,
            fontFamily: 'Averta',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: '400',
            letterSpacing: 1,
            textTransform: 'uppercase',
        },
    });
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            autoCapitalize="characters"
            placeholderTextColor={getColor(themeMode).primary}
        />
    );
};



export default InputText;
