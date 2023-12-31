import { StyleSheet, Text } from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";
import { useSelector } from "react-redux";


export const Heading = ({ color = "black", children }) => {
    const { themeMode } = useSelector(state => state.theme);

    const styles = StyleSheet.create({
        heading: {
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: FontFamily.avertaDemoPECuttedDemo,
            letterSpacing: 4,
            fontSize: 20,
            color: themeMode === "light" ? "#000" : "#fff",
        }
    });

    return (
        <Text style={styles.heading}>
            {children}
        </Text>
    );
}
