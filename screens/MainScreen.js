import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Pressable, TouchableOpacity, SafeAreaView, ImageBackground, TextInput } from "react-native";
import AmbigramFontContainer from "../components/AmbigramFontContainer";
import AmbigramForm from "../components/AmbigramForm";
import { FontFamily, Padding, ColorsLight, FontSize } from "../GlobalStyles";
import ModeButton from "../components/theme/ModeButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AmbigramFontData } from "../data/FontData";
import { useDispatch, useSelector } from 'react-redux';
import { setFont } from "../redux/reducers/font.reducer";
import { handleValidation } from "../redux/reducers/main.reducer";
import { createHapticsImpact } from "../utils/createHapticsImpact";
import { setSplashScreen } from "../redux/reducers/screens.reducers";
import { SvgUri } from 'react-native-svg';





const MainScreen = () => {

  const dispatch = useDispatch();
  const { fontData, selectedBucketName } = useSelector(state => state.fonts);
  const { firstWord, secondWord, isError, errorMessage, errorInput } = useSelector(state => state.main);
  const { hex: previewBackgroundColor } = useSelector(state => state.color.selectedColor);
  const { themeMode } = useSelector(state => state.theme);

  const [ambigramFontData, setAmbigramFontData] = React.useState([]);

  const handleTextChange = (text, input) => {
    if (input === "firstWord") {
      dispatch(setFirstWord(text));
    } else {
      dispatch(setSecondWord(text));
    }
  }

  const onGenerateAmbigram = () => {
    createHapticsImpact.heavy();
    dispatch(handleValidation())
    setAmbigramFontData([]);

    if (!isError) {
      let ambigramFontData = [];
      let firstInput = firstWord;
      let secondInput = secondWord !== "" ? secondWord : firstWord;
      for (let i = 0; i < firstWord.length; i++) {
        ambigramFontData.push({
          firstInput: firstInput[i],
          secondInput: secondInput[secondInput.length - 1 - i],
          flip: firstInput[i] > secondInput[secondInput.length - 1 - i],
        })
      }
      setAmbigramFontData(ambigramFontData);
    }

  };

  React.useEffect(() => {
    dispatch(setSplashScreen(false))
  }, []);

  React.useEffect(() => {
    //console.log(selectedBucketName, "CHANDAN");
  }, [selectedBucketName]);

  React.useEffect(() => {
    if (!isError) {
      setAmbigramFontData([]);
    }
  }, [isError]);

  const styles = StyleSheet.create({
    frameScrollViewContent: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    ambigramTypo: {
      textAlign: "left",
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
    },
    frameContainerSpaceBlock: {
      marginTop: 28,
      alignSelf: "stretch",
      overflow: "visible",
    },
    wrapperFlexBox: {
      paddingVertical: Padding.p_xs,
      backgroundColor: themeMode == "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      overflow: "hidden",
    },
    previewTypo: {
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
      letterSpacing: 1,
      fontSize: FontSize.size_xs,
    },
    createYourOwn: {
      color: "#959399",
      letterSpacing: 1,
      fontSize: FontSize.size_xs,
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
    },
    ambigram: {
      fontSize: 20,
      letterSpacing: 4,
      marginTop: 4,
      color: themeMode == "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
    },
    frameChild: {
      width: 46,
      height: 46,
    },
    frameGroup: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignSelf: "stretch",
    },
    frameItem: {
      marginTop: 16,
    },
    ambivert: {
      color: ColorsLight.colorWhite,
      textTransform: "uppercase",
      textAlign: "left",
      fontFamily: FontFamily.avertaDemoPECuttedDemo,
      letterSpacing: 1,
      fontSize: FontSize.size_xs,
    },
    ambivertWrapper: {
      shadowColor: "rgba(0, 0, 0, 0.15)",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowRadius: 16,
      elevation: 16,
      shadowOpacity: 1,
      paddingHorizontal: Padding.p_base,
    },
    frameContainer: {
      width: "100%",
    },
    preview: {
      lineHeight: 12,
      color: ColorsLight.colorGray_100,
    },
    previewWrapper: {
      backgroundColor: "#f5f5f5",
      paddingHorizontal: 101,
      paddingVertical: 106,
      justifyContent: "center",
      marginTop: 28,
      alignItems: "center",
      flexDirection: "row",
      alignSelf: "stretch",
    },
    generate: {
      color: themeMode == "light" ? ColorsLight.colorWhite : ColorsLight.colorGray_100,
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
    generateWrapper: {
      paddingHorizontal: 131,
      marginTop: 16,
      alignSelf: "stretch",
    },
    frameParent: {
      position: "absolute",
      top: 20,
      right: "0%",
      left: "0%",
      paddingHorizontal: 24,
      paddingVertical: 0,
      width: "100%",
    },
    mainScreen: {
      backgroundColor: themeMode == "light" ? ColorsLight.colorWhite : "black",
      flex: 1,
      width: "100%",
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: themeMode == "light" ? ColorsLight.colorWhite : "black",
      }}
    >
      <KeyboardAwareScrollView
        scrollEnabled={false}
        enableOnAndroid={true}
      >
        <View style={styles.mainScreen}>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View>
                <Text
                  style={[styles.createYourOwn, styles.ambigramTypo]}
                >{`CREATE YOUR OWN`}</Text>
                <Text style={[styles.ambigram, styles.ambigramTypo]}>AMBIGRAM</Text>
              </View>
              <ModeButton />
            </View>
            <ScrollView
              style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.frameScrollViewContent}
            >
              {
                fontData.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginRight: index === fontData.length - 1 ? 0 : 8,
                      }}>
                      <AmbigramFontContainer
                        fontName={item.name}
                        selected={item.selected}
                        onPress={() => {
                          dispatch(setFont(item.id));
                        }}
                      />
                    </View>
                  );
                })
              }

            </ScrollView>
            <View style={{
              backgroundColor: previewBackgroundColor,
              marginTop: 24,
              paddingVertical: 80,
              justifyContent: "center",
              alignItems: "center",
            }}>
              <View style={{
                display: "flex",
                flexDirection: "row",
                height: 60,
              }}>
                {
                  ambigramFontData.map((item, index) => {
                    bucket_url = `https://ambigram.s3.ap-south-1.amazonaws.com/${selectedBucketName}/`;
                    uri = item.flip ? `${bucket_url}${item.secondInput.toLowerCase()}${item.firstInput.toLowerCase()}.svg` : `${bucket_url}${item.firstInput.toLowerCase()}${item.secondInput.toLowerCase()}.svg`;
                    return (
                      <SvgUri
                        style={{
                          transform: item.flip ? [{ rotate: "180deg" }] : [{ rotate: "0deg" }],
                          marginRight: 2,
                          marginLeft: 2,
                        }}
                        key={index}
                        height={60}
                        width={40}
                        uri={uri}
                      />
                    );
                  })
                }
              </View>

            </View>
            <AmbigramForm />
            <View style={styles.groupContainer}>
              <TextInput
                style={{
                  ...styles.frameTypo,
                  borderColor: errorInput === "firstWord" ? ColorsLight.colorRed_100 : themeMode === "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
                }}
                placeholder="ENTER FIRST WORD"
                placeholderTextColor={themeMode === "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite}
                value={firstWord}
                onChangeText={(text) => {
                  handleTextChange(text, "firstWord")
                }}
                autoCapitalize="characters"
              />
              <View style={{ position: "relative", width: "100%", marginBottom: 8 }}>
                <TextInput
                  style={{
                    ...styles.frameItem,
                    ...styles.frameTypo,
                    borderColor: errorInput === "secondWord" ? ColorsLight.colorRed_100 : themeMode === "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite,
                  }}
                  placeholder="ENTER SECOND WORD (OPTIONAL)"
                  placeholderTextColor={themeMode === "light" ? ColorsLight.colorGray_100 : ColorsLight.colorWhite}
                  value={secondWord}
                  onChangeText={(text) => {
                    handleTextChange(text, "secondWord")
                  }}
                  autoCapitalize="characters"
                />
                <Text
                  style={{
                    ...styles.whiteTypo,
                    color: ColorsLight.colorRed_100,
                    marginTop: 4,
                    position: "absolute",
                    bottom: -20,
                    right: 0,
                    opacity: isError ? 1 : 0,
                  }}
                >
                  {errorMessage}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={[styles.generateWrapper, styles.wrapperFlexBox]} onPress={onGenerateAmbigram}>
                <Text style={[styles.generate, styles.previewTypo]}>Generate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.wrapperFlexBox, marginTop: 16 }} onPress={onGenerateAmbigram}>
                <Text style={[styles.generate, styles.previewTypo]}>CLEAR PREVIEW</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView >


  );
};



export default MainScreen;
