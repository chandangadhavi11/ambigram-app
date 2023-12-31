import { StyleSheet, Text } from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";
import { getColor } from "../utils/getThemeColor";
import { useSelector } from "react-redux";


export const Label = ({ color = "black", children, fontSize = 12 }) => {

    const styles = StyleSheet.create({
        heading: {
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: FontFamily.avertaDemoPECuttedDemo,
            letterSpacing: 1,
            fontSize: fontSize,
            color: color,
        }
    });

    return (
        <Text style={styles.heading}>
            {children}
        </Text>
    );
}
