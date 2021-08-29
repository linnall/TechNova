import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as SQLite from 'expo-sqlite';
import { StyleSheet, Text, View } from 'react-native';
import TopicsList from './components/TopicsList';
import SelectedTopic from './components/SelectedTopic';

const topics = [
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

const dailyWords = [
  {
    id: "1",
    en: "Yes",
  },
  {
    id: "2",
    en: "No",
  },
  {
    id: "3",
    en: "Ok",
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopicsList data={topics} />
      <SelectedTopic vocab={dailyWords} size={100} />
      <TopicsList topics={topics} />
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
