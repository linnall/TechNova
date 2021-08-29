import React, { useState } from "react";
import VocabCard from "./VocabCard";
import { FlatList } from 'react-native';

/* props:
    vocab,
    size
*/

export default function SelectedTopic(props) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem =  ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#5aaef2" : "#dce3e6";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <VocabCard
        keyExtractor={(item) => item.id}
        word={item.en}
        bgColor={backgroundColor}
        textColor={color}
      />
    );
  }
  return (
  <FlatList
    numColumns='3'
    data={props.vocab}
    renderItem={renderItem}
    onPress={() => setSelectedId(item.id)}
  />
  );
}
