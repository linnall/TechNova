import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';

/* props:
    topics,
    updateSelectedTopicLabel,
*/

function Item(props) {
    return (
        <TouchableOpacity
            onPress={() => {
                props.updateSelectedTopicLabel(props.label);
            }}
        >
            <Text style={[styles.text, {backgroundColor: props.bgColour, color: props.textColour}]}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
}

export default function TopicsList(props) {
    const renderItem =  ({ item }) => {
        const backgroundColor = item.label === props.selectedTopicLabel ? "#6e3b6e" : "#f9c2ff";
        const color = item.label === props.selectedTopicLabel ? 'white' : 'black';
        return (
            <View style={styles.topicList}>
                <Item
                    name={item.title}
                    label={item.label}
                    bgColour={backgroundColor}
                    textColour={color}
                    updateSelectedTopicLabel={props.updateSelectedTopicLabel}
                />
            </View>
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

const styles = StyleSheet.create({
    topicList: {
        padding: 2,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    text: {
        fontSize: 15,
        paddingHorizontal: "5%",
        paddingVertical: "5%",
    }
  })
