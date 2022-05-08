import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }


function GameScreen({userNumber}) {
    let maxBoundary = 100;
    let minBoundary = 1;

    const initialGuess = generateRandomBetween(minBoundary,maxBoundary, userNumber);
    const [currentGuess, setCurrentGues] = useState(initialGuess); 

    function nextGuessHandler(direction) {
      if (
        (direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber )
      ) {
        Alert.alert (
          "Don't lie!",
          "You know that this is wrong...",
                [
                  {
                    text: "Sorry!",
                    style: 'cancel'
                  } 
                ]
        );
        return;
      }
      if (direction === 'lower') {
        maxBoundary = currentGuess;
      } else {
        minBoundary = currentGuess;
      }
      const newRndNumber = generateRandomBetween(minBoundary,maxBoundary, currentGuess);
      setCurrentGues(newRndNumber);
    }

    
    return (
        <View style={styles.gameContainer}>
            <View>
                <Title>Oppenent's Number</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <View>
                <Text>Higher or Lower</Text>   
                  <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>     
            </View>
            <View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gameContainer: {
      margin: 50
    }
  });

export default GameScreen;