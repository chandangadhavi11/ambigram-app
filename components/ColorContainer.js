import React, { useMemo } from "react";
import { StyleSheet, View, ImageSourcePropType, Pressable } from "react-native";
import { ColorsLight } from "../GlobalStyles";
import { SelectedIcon } from "./icons";
import { createHapticsImpact } from "../utils/createHapticsImpact";
import { getDimension } from "../data/DimensionData";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ColorContainer = ({
  backgroundColor,
  selected = true,
  onPress,
}) => {

  const colorOnPressHandler = () => {
    createHapticsImpact.medium();
    onPress();
  }

  return (
    <Pressable onPress={colorOnPressHandler}>
      <View style={{
        ...styles.componentChild,
        backgroundColor: backgroundColor ? backgroundColor : ColorsLight.colorGray_100
      }}>
        {selected && <SelectedIcon />}
      </View>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  componentChild: {
    borderStyle: "solid",
    borderColor: ColorsLight.colorGray_100,
    borderWidth: 0.5,
    width: getDimension().COLOR_CONTAINER_SIZE,
    height: getDimension().COLOR_CONTAINER_SIZE,
    zIndex: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default ColorContainer;
