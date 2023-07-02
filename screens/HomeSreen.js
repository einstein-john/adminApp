import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "./WelcomeScreen";

export default function HomeSreen() {
  return (
    <SafeAreaView>
      <WelcomeScreen />
    </SafeAreaView>
  );
}
