// {// import React from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   ImageBackground,
// //   SafeAreaView,
// // } from "react-native";
// // import HomeSreen from "./screens/HomeSreen";
// // import LoginScreen from "./screens/LoginScreen";

// // import { NavigationContainer } from "@react-navigation/native";
// // import { NavigationContainer, useNavigation } from "@react-navigation/native";
// // import { createStackNavigator } from "@react-navigation/stack";
// // import { createStore } from "redux";
// // import { Provider, useDispatch } from "react-redux";
// // import WelcomeScreen from "./welcomeScreen";
// // import AdminDashboard from "./dashboard";
// // import newLuggage from "./newLuggage";
// // import { saveData } from "./storage";

// // Redux actions
// // const LOGIN = "LOGIN";

// // Redux reducer
// // const initialState = {
// //   isLoggedIn: false,
// //   username: "",
// // };

// // const reducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case LOGIN:
// //       return {
// //         ...state,
// //         isLoggedIn: true,
// //         username: action.payload,
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // Redux store
// // const store = createStore(reducer);

// // Screens
// // const LoginScreen = () => {
// //   const [username, setUsername] = React.useState("");
// //   const [password, setPassword] = React.useState("");
// //   const dispatch = useDispatch();
// //   const navigation = useNavigation();

// //   const handleLogin = () => {
// //     if (username === "admin" && password === "password") {
// //       dispatch({ type: LOGIN, payload: username });
// //       saveData("username", username);
// //       navigation.navigate("Welcome", { username });
// //     } else {
// //       console.log("Invalid login");
// //     }
// //   };

// //   return (
// // <View style={styles.container}>
// //   <ImageBackground
// //     // source={require("./assets/loginBG.jpg")}
// //     style={styles.imageBackground}
// //   >
// //     <View style={styles.content}>
// //       <Text style={styles.title}>Login</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Username"
// //         value={username}
// //         onChangeText={setUsername}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         secureTextEntry
// //         value={password}
// //         onChangeText={setPassword}
// //       />
// //       <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //         <Text style={styles.buttonText}>Login</Text>
// //       </TouchableOpacity>
// //     </View>
// //   </ImageBackground>
// // </View>
// // <View>Hey</View>
// //   );
// // };

// // Navigation
// // const Stack = createStackNavigator();

// // const App = () => {
// //   return (
// //     // <Provider store={store}>
// //     //   <NavigationContainer>
// //     //     <Stack.Navigator
// //     //       screenOptions={{
// //     //         headerShown: false,
// //     //       }}
// //     //     >
// //     //       <Stack.Screen
// //     //         name="Login"
// //     //         options={{
// //     //           title: "Login",
// //     //           headerTransparent: true,
// //     //         }}
// //     //         component={LoginScreen}
// //     //       />
// //     //       <Stack.Screen name="Welcome" component={WelcomeScreen} />
// //     //       <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
// //     //       <Stack.Screen name="NewLuggageScreen" component={newLuggage} />
// //     //     </Stack.Navigator>
// //     //   </NavigationContainer>
// //     // </Provider>
// // //     <NavigationContainer>
// // //       <StackActions.Navigator>

// // //       <LoginScreen />
// // //       <HomeSreen />
// // //       </StackActions.Navigator>

// // //     <NavigationContainer>

// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: "center",
// //     // backgroundColor: "rgba(255, 255, 255, 0.8)", // Updated background color with transparency
// //   },
// // imageBackground: {
// //   flex: 1,
// //   resizeMode: "stretch",
// //   justifyContent: "center",
// // },
// // content: {
// //   flex: 1,
// //   justifyContent: "center",
// //   alignItems: "center",
// //   backgroundColor: "rgba(0, 0, 0, 0.5)",
// //   borderWidth: 1,
// // },
// // title: {
// //   fontSize: 24,
// //   fontWeight: "bold",
// //   marginBottom: 20,
// // },
// // input: {
// //   width: 200,
// //   height: 40,
// //   borderWidth: 1,
// //   marginBottom: 10,
// //   padding: 10,
// //   borderRadius: 5,
// //   backgroundColor: "white",
// // },
// // button: {
// //   backgroundColor: "black",
// //   paddingHorizontal: 20,
// //   paddingVertical: 10,
// //   borderRadius: 10,
// //   marginTop: 10,
// // },
// // buttonText: {
// //   color: "white",
// //   fontSize: 16,
// // },
// // });

// // export default App;
// }

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeSreen from "./screens/HomeSreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeSreen}
        />

        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
