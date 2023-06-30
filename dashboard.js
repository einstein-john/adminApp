import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Line from './line';

const AdminDashboard = () => {
  const navigation = useNavigation();
  const [successfulScans, setSuccessfulScans] = useState(0);
  const [unsuccessfulScans, setUnsuccessfulScans] = useState(0);

  const totalScans = successfulScans + unsuccessfulScans;

  const handleSuccessfulScan = () => {
    setSuccessfulScans(successfulScans + 1);
  };

  const handleUnsuccessfulScan = () => {
    setUnsuccessfulScans(unsuccessfulScans + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={styles.subtitle}>Welcome!</Text>

      {/* Dashboard Components */}

      <Text style={styles.smallText}>Scans</Text>
      <Line />

      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <View style={styles.componentContainer}>
            <Text style={styles.componentTitle}>Successful</Text>
            <Text style={styles.componentValue}>{successfulScans}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.componentContainer}>
            <Text style={styles.componentTitle}>Unsuccessful</Text>
            <Text style={styles.componentValue}>{unsuccessfulScans}</Text>
          </View>
        </View>
      </View>

      <View style={styles.componentContainer}>
        <Text style={styles.componentTitle}>Total</Text>
        <Text style={styles.componentValue}>{totalScans}</Text>
      </View>

      <Text style={styles.smallText}>Controls</Text>
      <Line />

      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonModRed} onPress={handleUnsuccessfulScan}>
            <Ionicons name="md-square" size={32} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonModGreen} onPress={handleSuccessfulScan}>
            <Ionicons name="md-checkmark-circle" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Add more dashboard components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignContent: 'center',
  },
  row: {
    flex: 1,
    width: '50%',
    margin: 10,
  },
  componentContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  componentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  componentValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 14,
    color: 'grey',
    marginRight: 'auto',
    marginLeft: 15,
  },
  buttonModRed: {
    backgroundColor: 'red',
    borderRadius: 100,
    padding: 20,
    marginBottom: 20,
    width: '70%',
    alignItems: 'center',
    marginLeft: 22,
  },
  buttonModGreen: {
    backgroundColor: 'green',
    borderRadius: 100,
    padding: 20,
    marginBottom: 20,
    width: '70%',
    alignItems: 'center',
    marginLeft: 22,
  },
});

export default AdminDashboard;
