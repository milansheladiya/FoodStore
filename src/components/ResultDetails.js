import React from "react";
import {View,Image,Text, StyleSheet} from 'react-native';


const ResultDetails= ({result}) => {
    return(
        <View style={{padding:10, alignItems:'center'}}>
            <Image style={styles.images} source={{uri:result.image_url}}/>
            <Text>{result.name}</Text>
            <Text>{result.rating} Starts, {result.review_count}</Text>
            <Text>{result.phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    images:{
        width:300,
        borderRadius:4,
        height:150,
    }
});

export default ResultDetails;