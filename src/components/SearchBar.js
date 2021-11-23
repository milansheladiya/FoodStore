import React from "react";
import { View,TextInput, StyleSheet, Button } from "react-native"
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize="none"
                autoCorrect={false}
                placeholder="search" 
                style={styles.inputStyle}
                value={term}
                // onChangeText={newTerm => onTermChange(newTerm)}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}

                />
        </View>

    );
}

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:"#F0EEEE",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row",
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        marginHorizontal:15
    }


});

export default SearchBar;