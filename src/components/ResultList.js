import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { exp } from "react-native/Libraries/Animated/Easing";

const ResultList = ({title, results}) => {
    return(
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text> Results: {results.length} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
    }
});

export default ResultList;