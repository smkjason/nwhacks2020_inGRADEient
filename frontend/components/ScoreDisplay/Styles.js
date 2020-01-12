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
        backgroundColor: '#a5d7f0',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scoreGood: {
      backgroundColor: '#66eb3d', // green
    },

    scoreModerate: {
      backgroundColor: '#ffe103', // yellow
    },

    scoreEhhh: {
      backgroundColor: '#ff8800', // orange
    },

    scoreHarmful: {
      backgroundColor: '#ff3b3b', // red
    },

    scoreText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
    }
});
