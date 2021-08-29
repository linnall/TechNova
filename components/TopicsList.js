import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

/* props:
    topics
*/

function Item(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}  //redirect to EDIT PAGE here
        >
            <Text style={{backgroundColor: props.bgColour, color: props.textColour}}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
}

export default function TopicsList(props) {
    const [selectedId, setSelectedId] = useState(null);
    const renderItem =  ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item name={item.title} bgColour={backgroundColor} textColour={color}/>
        );
    }
    return (
        <FlatList
            data={props.topics}
            renderItem={renderItem}
            onPress={() => setSelectedId(item.id)}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
        />
    );
}
