import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#36B1F0",
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
});

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.route.params?.questions.length,
    activeQuestionIndex: 0,
    answerCorrect: false,
    answered: false,
  };

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState((state) => {
      let nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        nextIndex = 0;
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    const { correctCount, totalCount, answerCorrect, answered } = this.state;
    const { questions = [], color = "red" } = this.props.route.params;
    const question = questions[this.state.activeQuestionIndex];

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
        <StatusBar style="dark" />
        <View>
          <Text style={styles.text}>{question.question}</Text>

          <ButtonContainer>
            {question.answers.map((answer) => (
              <Button
                key={answer.id}
                text={answer.text}
                onPress={() => this.answer(answer.correct)}
              />
            ))}
          </ButtonContainer>
        </View>

        <Text style={styles.text}>{`${correctCount}/${totalCount}`}</Text>

        <Alert correct={answerCorrect} visible={answered} />
      </SafeAreaView>
    );
  }
}

export default Quiz;
