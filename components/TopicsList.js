import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

/* props:

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

function renderItem({item}) {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        <Item name={item.title} bgColour={backgroundColor} textColour={color}/>
    );
}

export default function TopicsList(props) {
    return (
        <FlatList 
            data={props.tempData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
        />
    );
}
