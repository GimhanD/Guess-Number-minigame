
import { TextInput, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {
    return (
    <View style={styles.inputContainer}>
       <TextInput 
        style = {styles.inputField} 
        maxLength = {2}
        keyboardType = {"number-pad"}
        autoCapitalize = {"none"}
        autoCorrect = {false}
       />
       <View style={styles.buttonsField}>
           <View style={styles.buttonContainer}>
             <PrimaryButton>Reset</PrimaryButton>  
           </View>
            <View style={styles.buttonContainer}>
             <PrimaryButton>Confirm</PrimaryButton>   
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
        backgroundColor: '#72063c',
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