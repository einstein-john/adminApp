import React, { useEffect } from 'react';
import { View, Text, Alert, BackHandler } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Logout',
        'Are you sure you want to log out?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Logout',
            onPress: () => {
              dispatch({ type: 'LOGIN', payload: '' });
              navigation.navigate('Login'); // Navigate to the login screen
            },
          },
        ],
        { cancelable: false }
      );
      return true; // Return true to prevent the default back button action
    };

    const timeout = setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: '' });
      navigation.navigate('AdminDashboard');
    }, 1000); // Adjust the duration as per your requirement (in milliseconds)

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      clearTimeout(timeout);
      backHandler.remove();
    };
  }, []);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome, {username}!</Text>
    </View>
  );
};

export default WelcomeScreen;
