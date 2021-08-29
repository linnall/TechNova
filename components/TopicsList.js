import React from "react";
import { Text, TouchableOpacity, FlatList } from 'react-native';

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
    const renderItem =  ({ item }) => {
        const backgroundColor = item.id === props.selectedTopicId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === props.selectedTopicId ? 'white' : 'black';
        return (
            <Item name={item.title} bgColour={backgroundColor} textColour={color}/>
        );
    };
    const setSelectedTopicLabel = ( (label) => {
        props.stateChanger({selectedTopicLabel: label});
    });
    return (
        <FlatList
            data={props.topics}
            renderItem={renderItem}
            onPress={() => updateSelectedTopicLabel(item.id)}
            keyExtractor={(item) => item.label}
            extraData={props.selectedTopicId}
        />
    );
}
