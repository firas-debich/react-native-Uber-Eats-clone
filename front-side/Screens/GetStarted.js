import React from "react";
import { Image, View, Text, ImageBackground, StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    lineHeight: 68.16,
    fontWeight: "400",
    color: "#FFFFFF",
  },
});

export default function GetStarted({ navigation }) {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          justifyContent: "space-around",
        }}
        source={require("../assets/images/Hamburger-ketchup-french-fries_iphone_1080x1920.jpg")}
      >
        <Logo />
        <GetText />
        <Button navigation={navigation} />
      </ImageBackground>
    </>
  );
}

const Button = ({ navigation }) => (
  <TouchableOpacity
    style={{
      backgroundColor: "white",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 35,
      width: 300,
      marginTop: 20,
      flexDirection: "row",
      position: "relative",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      elevation: 8,
      shadowOpacity: 0,
      shadowRadius: 4.65,
    }}
    onPress={() => navigation.navigate("Home")}
  >
    <Text
      style={{
        fontSize: 25,
        fontWeight: "700",
        flex: 1,
        textAlign: "center",
        lineHeight: 29.3,
      }}
    >
      Get Started
    </Text>
  </TouchableOpacity>
);

const GetText = () => (
  <View
    style={{
      alignSelf: "flex-start",
    }}
  >
    <Text style={styles.text}>Our Food</Text>

    <Text style={styles.text}>TastyFood</Text>
  </View>
);

const Logo = () => (
  <Image
    style={{ width: "30%", height: 120, borderRadius: 380 }}
    source={require("../assets/icons/splash1.png")}
  />
);
