import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux actions
const LOGIN = 'LOGIN';

// Redux reducer
const initialState = {
  isLoggedIn: false,
  username: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };
    default:
      return state;
  }
};

// Redux store
const store = createStore(reducer);

// Screens
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');

  const handleLogin = () => {
    store.dispatch({ type: LOGIN, payload: username });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Admin Login</Text>
      <TextInput
        placeholder="Username"
        style={{ width: 200, height: 40, borderWidth: 1, marginBottom: 10 }}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const DashboardScreen = () => {
  const { username } = store.getState();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome, {username}!</Text>
    </View>
  );
};

// Navigation
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {store.getState().isLoggedIn ? (
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
