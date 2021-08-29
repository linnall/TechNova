import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import SelectedTopic from './SelectedTopic';
import TopicsList from './TopicsList';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopic: 'daily',
      selectedTopicId: -1,
      selectedItemId: -1,
    }
  }

  componentDidMount() {
    // TODO get data from backend
    // axios.get("/topics")
    //   .then(res => {
    //     this.setState({
    //       ...this.state,
    //       topics: res.data.topics,
    //     })
    //   }).catch(err => {
    //     console.log(err);
    //   })
    this.setState({
      ...this.state,
      topics: [
        {
            id: "1",
            title: "Alphabet",
            label: "alphabet",
        },
        {
            id: "2",
            title: "Daily",
            label: "daily",
        },
        {
            id: "3",
            title: "Doctor's Visit",
            label: "doctor",
        }
      ],
      daily: [
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
        },
        {
          id: "4",
          en: "Bathroom",
        },
        {
          id: "5",
          en: "Water",
        },
        {
          id: "6",
          en: "Tired",
        },
        {
          id: "6",
          en: "Time?",
        }
      ],
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.scrollContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.homeTitle}>Welcome to our<Text style={styles.blueText}>TechNova</Text> app!</Text>
        </View>
        <TopicsList data={this.state.topics} selectedTopicId={this.state.selectedTopicId}/>
        <SelectedTopic vocab={this.state[this.state.selectedTopic]} size={100} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    alignSelf: "stretch",
    paddingRight: 40,
    paddingLeft: 40,
  },
  headerContent: {
    alignSelf: "stretch",
    justifyContent: "center",
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  homeTitle: {
    textAlign: "center",
    fontSize: 28
  },
  blueText: {
    color: "blue"
  },
  weatherText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 30,
    marginBottom: 50
  }
})

export default MainPage;