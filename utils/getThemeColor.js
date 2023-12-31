import { useSelector } from "react-redux";
import { DarkThemeColors, LightThemeColors } from "../data/ColorData";


export const getColor = (themeMode) => {
    return themeMode === "light" ? LightThemeColors : DarkThemeColors;
}