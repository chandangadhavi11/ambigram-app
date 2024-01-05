import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, ColorsLight, Padding } from "../GlobalStyles";
import { createHapticsImpact } from "../utils/createHapticsImpact";
import { useSelector } from "react-redux";
import { getDimension } from "../data/DimensionData";

const AmbigramFontContainer = ({ fontName, selected = false, onPress }) => {
  const { themeMode } = useSelector(state => state.theme);

  const styles = StyleSheet.create({
    fontText: {
      fontSize: getDimension().LABEL_FONT_SIZE,
      letterSpacing: 1,
      textTransform: "uppercase",
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
      color: themeMode == "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
      textAlign: "left",
    },
    selectedFontText: {
      fontSize: getDimension().LABEL_FONT_SIZE,
      letterSpacing: 1,
      textTransform: "uppercase",
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
      color: themeMode == "light" ? ColorsLight.colorWhite : ColorsLight.colorGray_100,
      textAlign: "left",
    },
    container: {
      borderStyle: "solid",
      borderColor: themeMode == "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
      borderWidth: 0.5,
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: Padding.p_base,
      paddingVertical: Padding.p_xs,
      backgroundColor: themeMode == "light" ? ColorsLight.colorWhite : ColorsLight.colorDarkgray,
    },
    selectedContainer: {
      borderStyle: "solid",
      borderColor: themeMode == "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
      borderWidth: 0.5,
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: Padding.p_base,
      paddingVertical: Padding.p_xs,
      backgroundColor: themeMode == "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,

    },

    selectedTouchableOpacity: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.16,
      shadowRadius: 10,
      elevation: 16,
    },

  });
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={selected ? styles.selectedTouchableOpacity : null}
      onPress={() => {
        createHapticsImpact.heavy();
        onPress();
      }}>
      <View style={selected ? styles.selectedContainer : styles.container}>
        <Text style={selected ? styles.selectedFontText : styles.fontText}>{fontName}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default AmbigramFontContainer;
