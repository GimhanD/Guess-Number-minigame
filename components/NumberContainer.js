import Colors from '../constants/colors';
import { StyleSheet, View, Text } from 'react-native';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText }>{children}</Text>
        </View>

    );
};

export default NumberContainer;

const styles = StyleSheet.create ({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent,
        padding: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin:20
    },
    numberText: {
         color: Colors.accent,
         fontSize: 36,
         fontWeight: 'bold'
    }
})