
import React,{useState} from "react";
import { View,Text, StyleSheet, Button } from "react-native"
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setTerm] = useState("");


    return(

        <View>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => console.log("data transmitted!")}/>
            <Text> Search screen </Text>
            <Text>{term}</Text>
        </View>

    );

}

const Style = StyleSheet.create({});

export default SearchScreen;