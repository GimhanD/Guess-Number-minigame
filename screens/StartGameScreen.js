
import Card from '../components/Card';
import { useState } from "react";
import { TextInput, View, Alert } from "react-native";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import InstructionText from '../components/InstructionText';


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    
    function numberInputHandler (enteredText) {
        setEnteredNumber(enteredText);
    } 

    function confirmInputHandler () {
        const choseNumber = parseInt(enteredNumber);

        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert (
                "Invalid Number",
                "Number has to be a number between 1 and 99.",
                [
                  {
                    text: "Okay",
                    onPress: resetInputHandler,
                    style: 'destructive'
                  } 
                ]
            );
            return;
        };
        onPickNumber(choseNumber);
    }

    function resetInputHandler( ) {
        console.log('rest')
    }

    return (
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText>Enter a Number</InstructionText>
       <TextInput 
        style = {styles.inputField} 
        maxLength = {2}
        keyboardType = {"number-pad"}
        autoCapitalize = {"none"}
        autoCorrect = {false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
       />
       <View style={styles.buttonsField}>
           <View style={styles.buttonContainer}>
             <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>  
           </View>
            <View style={styles.buttonContainer}>
             <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>   
            </View> 
       </View> 
    </Card>
    </View>
    );

}

const styles = StyleSheet.create ({
    rootContainer: {
        flex:1,
        marginTop: 35,
        alignItems: "center"
    },
    inputField: {
        color: 'yellow',
        height: 50,
        width: 50,
        marginVertical: 10,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: 'yellow',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsField: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex:1
    }
});

export default StartGameScreen;