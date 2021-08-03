import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import AdminDashboard from './src/screens/AdminDashboard';
import UserDashboard from './src/screens/UserDashboard';
import Signup from './src/screens/Signup';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
