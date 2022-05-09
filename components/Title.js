import { Text, StyleSheet } from 'react-native';

function Title ({children}) {
    return ( <Text style={styles.titelContainer}>{children}</Text> );
};

const styles = StyleSheet.create ({
    titelContainer: {
        fontSize: 24,
        //fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
        color: 'white',
        padding:10,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white'
    }
});

export default Title;