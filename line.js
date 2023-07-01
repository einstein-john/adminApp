import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '98%',
    marginBottom:5,
  },
});

export default Line;
