import { View, Image, StyleSheet, Text } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

import Title from '../components/Title';
import Colors from '../constants/colors';


function GameOverScreen ({roundsNumber, userNumber, onStartNewGame}) {
    return (
    <View style={styles.mainConatiner}>
        <View>
            <Title>Game Over</Title>            
        </View>
        <View style={styles.imageConatiner}> 
            <Image
                source={require('../assets/images/success.png')}
                style={styles.image}
            />
        </View>

        <Text style={styles.summaryText}>
            Your Phone needed 
            <Text style={styles.hignlightText}> {roundsNumber}</Text> rounds to guess the number 
            <Text style={styles.hignlightText}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create ({
    mainConatiner : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    imageConatiner: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth:3,
        borderColor: 'blak',
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24, 
        marginVertical: 24,
        textAlign: 'center'
    },
    hignlightText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent,

    }
})