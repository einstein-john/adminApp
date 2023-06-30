import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Line from './line';

const AdminDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={styles.subtitle}>Welcome, Admin!</Text>

      {/* Dashboard Components */}
     
      <Text style={styles.smallText}>Scans</Text>
      <Line />

      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <View style={styles.componentContainer}>
            <Text style={styles.componentTitle}>Successful</Text>
            <Text style={styles.componentValue}>1,234</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.componentContainer}>
            <Text style={styles.componentTitle}>Unsuccessful</Text>
            <Text style={styles.componentValue}>567</Text>
          </View>
        </View>
      </View>

      <View style={styles.componentContainer}>
            <Text style={styles.componentTitle}>Total</Text>
            <Text style={styles.componentValue}>567</Text>
          </View>


          <Text style={styles.smallText}>Controls</Text>
      <Line />

      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonModRed}>
            <Text style={styles.componentTitle}>STOP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonModGreen}>
            <Text style={styles.componentTitle}>GO</Text>
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
  },
  row: {
    flex: 1,
    width: '50%',
    margin:10,
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
  smallText:{
    fontSize:14,
    color:'grey',
    marginRight:"auto",
    marginLeft:15,
  },
  buttonModRed:{
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonModGreen:{
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default AdminDashboard;
