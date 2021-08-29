import React from 'react';
import { Text, StyleSheet } from 'react-native';

/* props:
    word,
    size
*/
export default function VocabCard(props) {
    return (
       <Text style={[styles.vocabCard, {fontSize: props.size}]}>{props.word}</Text>
    );
}

const styles = StyleSheet.create({
    vocabCard : {
        backgroundColor: '#d3d3d3',
        paddingHorizontal: "40%",
        paddingVertical: "20%",
    },
  });