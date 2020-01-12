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
        backgroundColor: '#ffb8b8',
        borderColor: '#ff3b3b',
    },

    goodIngredientButton: {
        backgroundColor: '#dcf5d5',
        borderColor: '#7af056',
    },

    ingredientButtonText: {
        fontSize: 14,
        fontWeight: '600',
    }
});
