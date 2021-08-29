import React from 'react';
import VocabCard from "./VocabCard";
import { View } from 'react-native';

/* props:
    vocab,
    size
*/

// from https://stackoverflow.com/questions/34952984/react-native-flexbox-how-to-do-percentages-columns-responsive-grid-et
import {Dimensions} from 'react-native';

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

const COLUMNS = 3;
const MARGIN = 0;
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

const grid = {
  flex: 1,
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start'
};

const cell = {
  marginLeft: MARGIN,
  marginTop: MARGIN,
  width: vw(100) / COLUMNS - SPACING
}

export default function SelectedTopic(props) {
  if (Array.isArray(props.vocab)) {
    const selectedTopicCards = props.vocab.map(item => {
      return <View style={grid}><VocabCard
        keyExtractor={(item) => item.id}
        word={item.en}
        size={props.size}
      /></View>
    });
    return selectedTopicCards;
  }
  return props.vocab;
}