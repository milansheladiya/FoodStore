
import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet, Button, ScrollView,TouchableOpacity } from "react-native"
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import userResults from "../hooks/userResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({navigation}) => {

    const [term, setTerm] = useState("");
    const [searchApi, result, errorMessage] = userResults();


    const filterResultByPrice = (price) => {

        return result && result.filter((obj) => {
            return obj.price === price;
        });

    };


    return(

        <View>
            <SearchBar  style={{flex:1}}
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            {/* <Text>{term}</Text> */}
            <Text>we have found {result && result.length} results </Text>
            <ScrollView style={{padding:20}}>
            <ResultList results={filterResultByPrice('$')} title="cost Effective"/>
            <ResultList results={filterResultByPrice('$$')} title="bit picher"/>
            <ResultList results={filterResultByPrice('$$$')} title="pastas"/>
            </ScrollView>
        </View>

    );

}

const Style = StyleSheet.create({});

export default SearchScreen;