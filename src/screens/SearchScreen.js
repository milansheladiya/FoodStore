
import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet, Button } from "react-native"
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import userResults from "../hooks/userResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [term, setTerm] = useState("");
    const [searchApi, result, errorMessage] = userResults();

    const filterResultByPrice = (price) => {

        return result.filter((price) => {
            return result.price === price;
        });

    };


    return(

        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi(term)}/>
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            {/* <Text>{term}</Text> */}
            <Text>we have found {result.length} results </Text>
            <ResultList results={filterResultByPrice('$')} title="cost Effective"/>
            <ResultList results={filterResultByPrice('$$')} title="bit picher"/>
            <ResultList results={filterResultByPrice('$$$')} title="pastas"/>
        </View>

    );

}

const Style = StyleSheet.create({});

export default SearchScreen;