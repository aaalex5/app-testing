import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native-web';
import TagButton from '../test-components/TagButton';
import EventItem from '../test-components/EventItem';
import FriendItem from '../test-components/FriendItem';

// iPhone 12 dimensions
const iPhone12Width = 390;
const iPhone12Height = 844;

const PlanScreen = () => {
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [description, setDescription] = useState(''); // State for text input
  const [showMoreFriends, setShowMoreFriends] = useState(false);

  const handleTagPress = (tag) => {
    // Handle tag selection
  };

  const handleFriendSelect = (friend) => {
    setSelectedFriends(prev => {
      if (prev.includes(friend)) {
        return prev.filter(f => f !== friend);
      }
      return [...prev, friend];
    });
  };

  const handleSeeMorePress = () => {
    setShowMoreFriends(prev => !prev); // Toggle between showing more or fewer friends
  };

  const initialFriends = ['Friend 1', 'Friend 2', 'Friend 3', 'Friend 4', 'Friend 5'];
  const moreFriends = ['Friend 6', 'Friend 7', 'Friend 8', 'Friend 9', 'Friend 10'];

  const friendsToShow = showMoreFriends ? [...initialFriends, ...moreFriends] : initialFriends;

  return (
    <View style={[styles.container]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What's Your Plan</Text>
          <Text style={styles.sectionDescription}>
            Select the tags that best describe your current plan.
          </Text>
	  <View style={styles.tagContainer}>
            {['Work', 'Party', 'Study', 'Gym', 'Relax', 'Other'].map(tag => (
              <TagButton key={tag} label={tag} onPress={() => handleTagPress(tag)} />
            ))}
          </View>
          
	  <TextInput
            style={styles.textInput}
            placeholder="Enter your description here..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Events</Text>
          <Text style={styles.sectionDescription}>
            Here are your upcoming events. Scroll to see all of them.
          </Text>
	  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'].map(event => (
              <EventItem key={event} eventName={event} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Inner Circle</Text>
          <Text style={styles.sectionDescription}>
            Select the friends you want to include in your plan.
          </Text>
	  {['Friend 1', 'Friend 2', 'Friend 3', 'Friend 4', 'Friend 5'].map(friend => (
            <FriendItem
              key={friend}
              friendName={friend}
              isSelected={selectedFriends.includes(friend)}
              onSelect={() => handleFriendSelect(friend)}
            />
          ))}
          <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMorePress}>
            <Text style={styles.seeMoreButtonText}>
              {showMoreFriends ? 'See Less Friends/Groups' : 'See More Friends/Groups'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: iPhone12Width,
    height: iPhone12Height,
    backgroundColor: '#f8f8f8',
    alignSelf: 'center', // Centers the view when inspecting in browser
  },
  scrollView: {
    paddingVertical: 20,
    paddingBottom: 70,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left', // Center titles for a more mobile-friendly look
  },
  sectionDescription: {
    fontSize: 12, // Small text size
    color: '#777', // Grey color for subtle effect
    marginBottom: 10, // Space between the description and the rest of the section
    textAlign: 'left', // Center the description text
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to new rows
    justifyContent: 'flex-start', // Evenly spaces out the buttons
    paddingHorizontal: 10,
  },
  textInput: {
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlignVertical: 'top', // Ensures the text starts at the top
    minHeight: 80, // Minimum height for the text input
  },
  seeMoreButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  seeMoreButtonText: {
    color: '#333',
    fontSize: 14,
  },
  floatingButton: {
    position: 'fixed',
    bottom: 20,
    left: '10%',
    right: '10%',
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  floatingButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlanScreen;

