import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    component: {
      flexDirection: 'column',
      alignItems: 'center',
    },

    level: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 8,
    },

    score: {
        // red: #ff3b3b
        // orange: #ff8800
        // yellow: #fff34a
        // green: #7af056
        backgroundColor: '#ff8800',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scoreText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
    }
});
