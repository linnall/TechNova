import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VocabCard from './components/VocabCard';
import TopicsList from './components/TopicsList';

const tempData = [
  {
      id: "1",
      title: "Alphabet",
  },
  {
      id: "2",
      title: "Daily",
  },
  {
      id: "3",
      title: "Doctor's Visit",
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      {/* <VocabCard word='yes' size='30'></VocabCard> */}
      <TopicsList data={tempData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
