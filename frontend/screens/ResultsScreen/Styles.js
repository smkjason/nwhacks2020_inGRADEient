import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    wrapper: {
      padding: 20,
      flex: 1
    },

    resultsHeader: {
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    resultsHeaderTitle: {
        color: '#000000',
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: 1,
        paddingBottom: 24,
    },
  
    explanation: {
        color: '#000000',
        fontSize: 16,
    },

    explanationNumber: {
        color: '#ff3b3b',
        fontSize: 20,
        fontWeight: 'bold'
    },

    category: {
      paddingTop: 16,
    },

    categoryHeader: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 2,
    },

});
