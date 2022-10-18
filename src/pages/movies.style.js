import { StyleSheet } from 'react-native'



export const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 240,
        flexDirection: 'row',
        backgroundColor: 'orange',
        borderRadius: 10,
        margin: 10,
        padding: 20,
        elevation: 10,
    },

    card_image: {
        width: 150,
        height: 200,
    },

    card_details: {
        paddingLeft: 10,   
        paddingRight: 150,     
    },

    card_title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    card_original_title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    card_overview: {
        fontSize: 15,
    },

    pagination_button:{
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 1,
        border: 'solid',
        borderWidth: .1,
        //margin: 2,
        height: 40,
        width: 40,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
    },
})
