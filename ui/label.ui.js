import { StyleSheet, Text } from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";
import { getColor } from "../utils/getThemeColor";
import { useSelector } from "react-redux";
import { getDimension } from "../data/DimensionData";


export const Label = ({ color = "black",
    children,
    fontSize = getDimension().LABEL_FONT_SIZE
}) => {

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
