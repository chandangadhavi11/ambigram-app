import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getColor } from '../utils/getThemeColor';
import { getDimension } from '../data/DimensionData';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

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
            paddingVertical: getDimension().INPUT_TEXT_VERTICAL_PADDING,
            paddingHorizontal: getDimension().INPUT_TEXT_HORIZONTAL_PADDING,
            color: getColor(themeMode).primary,
            fontFamily: 'Averta',
            fontSize: getDimension().INPUT_TEXT_FONT_SIZE,
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
