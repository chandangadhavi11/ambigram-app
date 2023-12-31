import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Label } from './label.ui';
import { getColor } from '../utils/getThemeColor';
import { useSelector } from 'react-redux';
import { createHapticsImpact } from '../utils/createHapticsImpact';

const Button = ({ onPress, title,
    children,
}) => {
    const { themeMode } = useSelector(state => state.theme);
    const styles = StyleSheet.create({
        button: {
            width: '100%',
            backgroundColor: getColor(themeMode).primary,
            padding: 12,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {
                children
                    ? children
                    : <Label color={getColor(themeMode).secondary}>{title}</Label>
            }

        </TouchableOpacity>
    );
};



export default Button;
