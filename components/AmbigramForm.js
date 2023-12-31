import * as React from "react";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import ColorContainer from "./ColorContainer";
import { ColorsLight, FontFamily, FontSize } from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../redux/reducers/colors.reducer";
import { setFirstWord, setSecondWord } from "../redux/reducers/main.reducer";
import { BGIcon } from "./icons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const AmbigramForm = () => {
  // const [error, setError] = React.useState({ isError: false, message: "", input: null });
  const { listOfColors, selectedColor } = useSelector(state => state.color);
  const { firstWord, secondWord } = useSelector(state => state.main);
  const { isError, errorMessage, errorInput } = useSelector(state => state.main);
  const dispatch = useDispatch();
  const { themeMode } = useSelector(state => state.theme);

  const handleTextChange = (text, input) => {
    if (input === "firstWord") {
      dispatch(setFirstWord(text));
    } else {
      dispatch(setSecondWord(text));
    }
  }

  const styles = StyleSheet.create({
    frameScrollView1Content: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    frameGroupLayout: {
      width: "100%",
      position: "absolute",
      overflow: "visible",
    },
    frameGroupFlexBox: {
      alignItems: "center",
      flexDirection: "row",
    },
    whiteTypo: {
      color: themeMode === "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
      letterSpacing: 2,
      fontSize: FontSize.size_xs,
      textTransform: "uppercase",
    },
    frameTypo: {
      height: 48,
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
      fontSize: FontSize.size_xs,
      alignSelf: "stretch",
      borderStyle: "solid",
      borderWidth: 0.5,
      paddingHorizontal: 16,
      paddingVertical: 12,
      color: themeMode === "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
      letterSpacing: 2,
    },
    frameTypoError: {
      height: 48,
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
      fontSize: FontSize.size_xs,
      alignSelf: "stretch",
      borderStyle: "solid",
      borderColor: ColorsLight.colorRed_100,
      borderWidth: 0.5,
      paddingHorizontal: 16,
      paddingVertical: 12,
      color: ColorsLight.colorGray_100,
      letterSpacing: 2,

    },
    componentParent: {
      top: 32,
      left: 0,
    },
    coloricon: {
      width: 16,
      height: 16,
      overflow: "hidden",
    },
    backgroundColor: {
      textTransform: "uppercase",
      textAlign: "left",
      marginLeft: 4,
    },
    white: {
      textAlign: "right",
    },
    frameGroup: {
      top: 0,
      right: "0%",
      left: "0%",
      justifyContent: "space-between",
      width: "100%",
      position: "absolute",
    },
    frameParent: {
      height: 70,
      alignSelf: "stretch",
    },
    frameItem: {
      marginTop: 16,
    },
    groupContainer: {
      marginTop: 22,
      alignSelf: "stretch",
      alignItems: "flex-end",
    },
    groupParent: {
      marginTop: 28,
      alignSelf: "stretch",
    },
  });

  return (
    <View style={styles.groupParent}>
      <View style={styles.frameParent}>
        <ScrollView
          style={[styles.componentParent, styles.frameGroupLayout]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollView1Content}
        >
          {listOfColors.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <View style={{ width: 12 }} />}
              <ColorContainer
                selected={selectedColor.hex === item.hex}
                backgroundColor={item.hex}
                onPress={() => dispatch(setColor(item))}
              />
            </React.Fragment>
          ))}
        </ScrollView>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frameGroupFlexBox}>
            <BGIcon
              color={themeMode === "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite}
            />
            <Text style={[styles.backgroundColor, styles.whiteTypo]}>
              BACKGROUND COLOR
            </Text>
          </View>
          <Text style={[styles.white, styles.whiteTypo]}>{selectedColor.name}</Text>
        </View>
      </View>
    </View>
  );
};



export default AmbigramForm;
