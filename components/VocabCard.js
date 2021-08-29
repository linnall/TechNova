import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

/* props:
    word,
    size
*/
export default function VocabCard(props) {
    return (
        <Card containerStyle={[styles.vocabCard, {width: props.size}]}>
            <Text style={[styles.text]}>{props.word}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    vocabCard: {
        backgroundColor: '#d3d3d3',
    },
    text : {
        alignItems: 'center',
        paddingHorizontal: "10%",
        paddingVertical: "10%",
    },
  });