import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    width: '98%',
  },
});

export default Line;
