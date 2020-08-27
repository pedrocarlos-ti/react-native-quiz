import React from "react";
import Animated from "react-native-reanimated";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";

const Stack = createStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{ title: "Quizzes", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={({ route }) => ({
          title: route.params.title,
          cardStyle: {
            backgroundColor: route.params.color,
          },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: route.params.color,
            borderBottomColor: route.params.color,
            elevation: 0,
          },
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
