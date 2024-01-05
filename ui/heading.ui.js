import { StyleSheet, Text } from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";
import { useSelector } from "react-redux";
import { getDimension } from "../data/DimensionData";


export const Heading = ({ color = "black", children }) => {
    const { themeMode } = useSelector(state => state.theme);

    // console.log(getDimension().HEADING_FONT_SIZE, "heading font size");

    const styles = StyleSheet.create({
        heading: {
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: FontFamily.avertaDemoPECuttedDemo,
            letterSpacing: getDimension().FONT_LETTER_SPACING,
            fontSize: getDimension().HEADING_FONT_SIZE,
            color: themeMode === "light" ? "#000" : "#fff",
        }
    });

    return (
        <Text style={styles.heading}>
            {children}
        </Text>
    );
}
