import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { MoonIcon, PowerIcon, SunIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { changetheme } from '../../redux/reducers/mode.reducer';
import { createHapticsImpact } from '../../utils/createHapticsImpact';

const ModeButton = () => {
    const dispatch = useDispatch();
    const { themeMode } = useSelector(state => state.theme);
    const { credits } = useSelector(state => state.main);

    const handleThemeChange = () => {
        createHapticsImpact.heavy();
        dispatch(changetheme())
    }

    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <PowerIcon />
                <Text style={{
                    fontFamily: "Averta",
                    fontSize: 14,
                    color: themeMode === 'light' ? "#65616D" : "lightgray",
                    marginLeft: 5
                }}>{credits}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleThemeChange}>
                {themeMode === 'light' && <MoonIcon
                    size={18}
                    color="#65616D"
                />}
                {themeMode === 'dark' && <SunIcon
                    size={18}
                    color="lightgray"
                />}
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    button: {
        width: 46,
        height: 46,
        borderRadius: 30,
        borderWidth: 0.7,
        borderColor: '#65616D',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 14,
    },
});

export default ModeButton;
