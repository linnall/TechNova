import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import SelectedTopic from './SelectedTopic';
import TopicsList from './TopicsList';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopicLabel: 'daily',
      selectedTopicId: -1,
      selectedItemId: -1,
      topics: [],
    }
  }
  updateSelectedTopicLabel =  function(label) {
    console.log('updateSelectedTopicLabel', label);
    this.setState({selectedTopicLabel: label});
  };

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
      doctor: [
        {
          id: "1",
          en: "Cold",
        },
        {
          id: "2",
          en: "Warm",
        },
        {
          id: "3",
          en: "Pain",
        },
        {
          id: "4",
          en: "Tender",
        },
        {
          id: "5",
          en: "Headache",
        },
        {
          id: "6",
          en: "Tired",
        },
        {
          id: "6",
          en: "Sleep",
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

  getTopicName = (label) => {
    var topic = this.state.topics.find(topic => topic.label === label);
    return topic? topic.title: label;
  }

  render() {
    return (
      <SafeAreaView style={styles.scrollContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.homeTitle}>Welcome to our <Text style={styles.blueText}>TechNova</Text> app!</Text>
        </View>
        <TopicsList
          topics={this.state.topics}
          updateSelectedTopicLabel={this.updateSelectedTopicLabel.bind(this)}
          selectedTopicId={this.state.selectedTopicId}
        />
        <Text style={styles.homeTitle}>
          Topic: <Text style={styles.blueText}>{this.getTopicName(this.state.selectedTopicLabel)}</Text>
        </Text>
        <SelectedTopic
          vocab={this.state[this.state.selectedTopicLabel]}
          stateChanger={this.setState}
          size={100}
        />
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
})

export default MainPage;