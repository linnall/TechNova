import React from "react";
import { Text, TouchableOpacity, FlatList } from 'react-native';

/* props:
    topics
*/

function Item(props) {
    return (
        <TouchableOpacity
            onPress={() => {
                props.updateSelectedTopicLabel(props.label);
            }}
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
            <Item
                name={item.title}
                label={item.label}
                bgColour={backgroundColor}
                textColour={color}
                updateSelectedTopicLabel={props.updateSelectedTopicLabel}
            />
        );
    };

    return (
        <FlatList
            data={props.topics}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
            extraData={props.selectedTopicId}
        />
    );
}
