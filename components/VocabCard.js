import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

/* props:
    word,
    size,
    updateSelectedItemId,
*/
export default function VocabCard(props) {
    return (
        <TouchableOpacity
            onPress={() => {
                console.log(props.key);
                // props.updateSelectedItemId(props.key);
            }}
        >
            <Card containerStyle={{backgroundColor: props.bgColor, width: props.size}}>
                <Text style={[{color: props.textColor}, styles.text]}>{props.text}</Text>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    vocabCard: {
        backgroundColor: '#dce3e6',
    },
    text : {
        alignItems: 'center',
        paddingHorizontal: "10%",
        paddingVertical: "10%",
    },
  });