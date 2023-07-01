import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { saveData, retrieveData } from './storage';
import Line from './line';

const AdminDashboard = ({ navigation }) => {
  const [successfulScans, setSuccessfulScans] = useState(0);
  const [unsuccessfulScans, setUnsuccessfulScans] = useState(0);

  useEffect(() => {
    // Retrieve the counts from AsyncStorage on component mount
    retrieveCounts();
  }, []);

  useEffect(() => {
    // Save the counts to AsyncStorage whenever they change
    saveCounts();
  }, [successfulScans, unsuccessfulScans]);

  const retrieveCounts = async () => {
    const savedCounts = await retrieveData('scanCounts');
    if (savedCounts) {
      setSuccessfulScans(savedCounts.successful || 0);
      setUnsuccessfulScans(savedCounts.unsuccessful || 0);
    }
  };

  const saveCounts = async () => {
    const counts = {
      successful: successfulScans,
      unsuccessful: unsuccessfulScans,
    };
    await saveData('scanCounts', counts);
  };

  const totalScans = successfulScans + unsuccessfulScans;

  const handleSuccessfulScan = () => {
    setSuccessfulScans(successfulScans + 1);
  };

  const handleUnsuccessfulScan = () => {
    setUnsuccessfulScans(unsuccessfulScans + 1);
  };

  const handleResetCounts = () => {
    setSuccessfulScans(0);
    setUnsuccessfulScans(0);
  };

  const handleNewLuggage = () => {
    // Navigate to the new screen
    navigation.navigate('NewLuggageScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={styles.subtitle}>Welcome!</Text>

      {/* Dashboard Components */}
      <View style={styles.dashboardContainer}>
        <Text style={styles.smallText}>Create luggage</Text>
        <Line />

        <TouchableOpacity style={styles.componentContainer} onPress={handleNewLuggage}>
          <Text style={styles.componentTitle}>New luggage</Text>
        </TouchableOpacity>

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
              <Text style={[styles.componentValue, styles.unsuccessfulCount]}>
                {unsuccessfulScans}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.componentContainer}>
          <Text style={styles.componentTitle}>Total</Text>
          <Text style={[styles.componentValue, styles.totalCount]}>{totalScans}</Text>
        </View>

        <View style={styles.controlContainer}>
          <TouchableOpacity style={styles.link} onPress={handleResetCounts}>
            <Text style={styles.resetText}>Reset Counts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => console.log('View scan information')}
          >
            <Text style={styles.resetText}>View scan information</Text>
          </TouchableOpacity>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  dashboardContainer: {
    backgroundColor: '#f0f0f0',
    height: 600,
    alignContent: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 'auto',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 'auto',
    color: 'white',
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
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width: 'auto',
    alignItems: 'center',
    marginTop: 5,
  },
  componentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  componentValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  smallText: {
    fontSize: 14,
    color: 'grey',
    marginRight: 'auto',
    marginLeft: 15,
  },
  buttonModRed: {
    backgroundColor: '#800000',
    borderRadius: 100,
    padding: 15,
    marginBottom: 20,
    width: '50%',
    alignItems: 'center',
    marginLeft: 38,
  },
  buttonModGreen: {
    backgroundColor: '#004d00',
    borderRadius: 100,
    padding: 15,
    marginBottom: 20,
    width: '50%',
    alignItems: 'center',
    marginLeft: 38,
  },
  unsuccessfulCount: {
    color: 'red',
  },
  totalCount: {
    color: 'black',
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  link: {
    alignItems: 'flex-start',
  },
  resetText: {
    color: 'orange',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});

export default AdminDashboard;
