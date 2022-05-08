
import { useState } from "react";
import { TextInput, Text, View, Alert } from "react-native";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";


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
    <View style={styles.inputContainer}>
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
    </View>
    );

}

const styles = StyleSheet.create ({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2}
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