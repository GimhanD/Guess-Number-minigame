import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({children}) {
    function pressHandler () {
        console.log("pressed")
    }

    return (
        <View style = {styles.buttonOuterContainer}>
            <Pressable 
                onPress={pressHandler}
                style={({pressed}) => pressed 
                    ? [styles.pressed, styles.buttonInnerContainer]        
                    :styles.buttonInnerContainer      
                        }
                android_ripple={{color: '#72063c'}}
            >  
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
        
    );       
}

const styles = StyleSheet.create ({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: '#34343c',
        paddingHorizontal:16,
        paddingVertical: 8,
        elevation: 3
    },
    buttonText: {
        textAlign: "center",
        color: 'white',
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton;