import Card from "../components/Card";
import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import InstructionText from "../components/InstructionText";
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from "../components/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
let minBoundary = 1;
let maxBoundary = 100;
  


function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1,100, userNumber);
    const [currentGuess, setCurrentGues] = useState(initialGuess); 
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect (() => {
      if ( currentGuess === userNumber) {
        onGameOver(guessRounds.length);
      }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect (() => {
      minBoundary = 1;
      maxBoundary = 100;
       
    }, []);

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
      setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    
    return (
        <View style={styles.gameContainer}>
            <View>
                <Title>Oppenent's Number</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <Card>
                <InstructionText style={styles.instrcutionTextCase}>Higher or Lower</InstructionText>   
                  <View style={styles.buttonsField}>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                      <Ionicons name='remove-circle-outline' size={24} />
                    </PrimaryButton></View>
                    <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name='add-circle-outline' size={24} />
                      </PrimaryButton></View>
                </View>     
            </Card>
            <View style={styles.listContainer}>
              {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}

              <FlatList
                data={guessRounds}
                renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                keyExtractor={(item) => item}
              ></FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gameContainer: {
      margin: 50,
      flex: 1
    },
    instrcutionTextCase: {
      margin: 20
    },
    buttonsField: {
      flexDirection: "row",
  },
    buttonContainer: {
      flex:1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
  });

export default GameScreen;