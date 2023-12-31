import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily } from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setSplashScreen } from "../redux/reducers/screens.reducers";

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { ambigramOneLiners } = useSelector(state => state.screen);

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MainScreen");
    }, 3000);
  }, []);

  const randomOneLiner = ambigramOneLiners[Math.floor(Math.random() * ambigramOneLiners.length)];
  //console.log(randomOneLiner);

  return (
    <View style={styles.splashScreen}>
      <Text style={[styles.ambigram, styles.ambigramTypo]}>AMBIGRAM</Text>
      <View style={[styles.splashScreenInner, styles.vectorIconLayout]}>
        {/* <Image
          style={[styles.excludeIcon, styles.excludeIconPosition]}
          contentFit="cover"
          source={require("../assets/exclude.png")}
        /> */}

      </View>
      <Text

        style={[styles.createYourOwn]}
      >{randomOneLiner}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ambigramTypo: {
    textAlign: "center",
    fontFamily: FontFamily.avertaDemoPECuttedDemo,
    left: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 100,
    width: 100,
    borderRadius: 24,
    backgroundColor: "#F1F1F1",

  },
  excludeIconPosition: {
    left: "50%",
    position: "absolute",
  },
  ambigram: {
    marginLeft: -68.5,
    top: 290,
    fontSize: 20,
    letterSpacing: 4,
    color: "#2b2734",
  },
  vectorIcon: {
    zIndex: 0,
  },
  excludeIcon: {
    marginTop: -29,
    marginLeft: -27,
    top: "50%",
    width: 54,
    height: 59,
    zIndex: 1,
  },
  vectorParent: {
    marginLeft: -50,
    top: 0,
    flexDirection: "row",
  },
  splashScreenInner: {
    marginLeft: -49.5,
    top: 148,
    left: "50%",
    position: "absolute",
  },
  createYourOwn: {
    width: "100%",
    position: "absolute",
    bottom: 100,
    fontSize: 12,
    letterSpacing: 1,
    color: "#959399",
    textTransform: "uppercase",
    textAlign: "center",
    paddingHorizontal: 60,
    lineHeight: 20,
  },
  splashScreen: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default SplashScreen;
