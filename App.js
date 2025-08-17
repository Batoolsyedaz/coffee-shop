import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screens
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ShoppingScreen from './ShoppingScreen';
import ProfileScreen from './ProfileScreen';
import Item1Screen from './Item1Screen';
import Item2Screen from './Item2Screen';
import Item3Screen from './Item3Screen';
import Item4Screen from './Item4Screen';


const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Shopping" component={ShoppingScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const TopTabNavigator = () => (
   <TopTab.Navigator screenOptions={{ tabBar: () => null ,headerShown: false}}>
    <TopTab.Screen name="Espresso-Based Drinks" component={BottomTabNavigator} />
    <TopTab.Screen name="Brewed Coffee (Drip/Filter)" component={Item1Screen} />
    <TopTab.Screen name="Cold Coffee" component={Item2Screen} />
    <TopTab.Screen name="Instant Coffee" component={Item3Screen} />
  </TopTab.Navigator>
);

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="A latte love in every sip ☕"
      component={MainStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        tabBarLabel: 'Detail',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Shopping"
      component={ShoppingScreen}
      options={{
        tabBarLabel: 'Shopping',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart" color={color} size={size} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Toptabs" component={TopTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
