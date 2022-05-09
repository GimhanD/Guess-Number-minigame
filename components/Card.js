import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

function Card({children}) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create ({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2}
    }
})