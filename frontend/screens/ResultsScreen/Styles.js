import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    wrapper: {
      padding: 24,
    },

    resultsHeader: {
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    resultsHeaderTitle: {
        color: '#000000',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 1,
        paddingBottom: 24,
    },
  
    explanation: {
        color: '#000000',
        fontSize: 18,
    },

    explanationNumber: {
        color: '#ff3b3b',
        fontSize: 24,
        fontWeight: 'bold'
    },

    category: {
      paddingTop: 16,
    },

    categoryHeader: {
        color: '#000000',
        fontSize: 22,
        fontWeight: '700',
        paddingBottom: 2,
    },

});
