import React from "react";
import {View, Text, StyleSheet,TouchableOpacity} from "react-native"
import { FlatList } from "react-native-gesture-handler";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({title, results, navigation }) => {

    if(!results.length){
        return null;
    }

    return(
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate("ResultShowScreen",{id:item.id})}><ResultDetails result={item}/></TouchableOpacity>;
            }}
            />
            <Text> Results: {results && results.length} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
    }
});

export default withNavigation(ResultList);