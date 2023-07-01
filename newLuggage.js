import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NewLuggageScreen = ({ navigation }) => {
  const [luggageName, setLuggageName] = useState('');

  const handleCreateLuggage = () => {
    // Logic for creating new luggage goes here
    // You can use the "luggageName" state variable to access the entered luggage name

    // Once the luggage is created, you can navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Luggage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter luggage name"
        value={luggageName}
        onChangeText={setLuggageName}
      />
      <Button title="Create" onPress={handleCreateLuggage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default NewLuggageScreen;
