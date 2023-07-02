import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Barcode from './components/barcode';

const NewLuggageScreen = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [luggageId, setLuggageId] = useState('');

  useEffect(() => {
    if (name && weight && destination && description) {
      const formattedDestination = destination.toLowerCase().replace(/\s/g, '-');
      const generatedLuggageId = `${formattedDestination}-${Math.floor(Math.random() * 10000)}`;
      setLuggageId(generatedLuggageId);
    } else {
      setLuggageId('');
    }
  }, [name, weight, destination, description]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Luggage</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight in kg"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter the luggage Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter the luggage Description"
        value={description}
        onChangeText={setDescription}
      />

      {luggageId ? (
        // <Text style={styles.generatedIdText}>Luggage ID: {luggageId}</Text>
        <Barcode
        value={luggageId}
        options={{ format: 'CODE128', background: 'pink' }}
        rotation={5}
      />
      ) : null}

<TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save </Text>
      </TouchableOpacity>

      
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
    borderRadius: 10,
  },
  generatedIdText: {
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    width: '40%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
});

export default NewLuggageScreen;
