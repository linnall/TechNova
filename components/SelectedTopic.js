import React from "react";
import VocabCard from "./VocabCard";
import { FlatList } from 'react-native';

/* props:
    vocab,
    size
*/

export default function SelectedTopic(props) {
  const renderItem =  ({ item }) => {
    const backgroundColor = item.id === props.selectedItemId ? "#5aaef2" : "#dce3e6";
    const color = item.id === props.selectedItemId ? 'white' : 'black';

    return (
      <VocabCard
        keyExtractor={(item) => item.id}
        id={item.id}
        text={item.en}
        bgColor={backgroundColor}
        textColor={color}
        size={props.size}
        selectedItemId={props.selectedItemId}
        updateSelectedItemId={props.updateSelectedItemId}
      />
    );
  }
  return (
  <FlatList
    numColumns='3'
    data={props.vocab}
    renderItem={renderItem}
    onPress={() => (item.id)}
  />
  );
}
