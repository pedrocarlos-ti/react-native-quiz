import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computersQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <View>
    <StatusBar style="dark" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#36b1f0",
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#799496",
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475b"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computersQuestions,
          color: "#49475b",
        })
      }
    />
  </View>
);
