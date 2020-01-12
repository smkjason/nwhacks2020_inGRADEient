import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    ingredientButton: {
        backgroundColor: '#d2eefc',
        padding: 6,
        marginBottom: 6,
        marginRight: 6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#a5d7f0',
    },

    badIngredientButton: {
        backgroundColor: '#ffa6a6',
        borderColor: '#ff3b3b',
    },

    goodIngredientButton: {
        backgroundColor: '#c2fab1',
        borderColor: '#66eb3d',
    },

    ingredientButtonText: {
        fontSize: 14,
        fontWeight: '600',
    }
});
