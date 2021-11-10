import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Main from '../../components/AuthScreens/Main';
import Login from '../../components/AuthScreens/Login';
import Register from '../../components/AuthScreens/Register';
import Profile from '../../components/AppScreens/Profile/Profile';
import EditProfile from '../../components/AppScreens/Profile/EditProfile';
import ClassesList from '../../components/AppScreens/TheClasses/ClassesList';
import ClassNewOne from '../../components/AppScreens/TheClasses/ClassNewOne';
import StudentsHeader from '../../components/AppScreens/Students/StudentsHeader';
import StudentsNewOne from '../../components/AppScreens/Students/StudentsNewOne';
import AssistanceControl from '../../components/AppScreens/AssistanceControl/AssistanceControl';
import Logout from '../../components/AppScreens/LogOut/LogOut';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const AuthScreens = () => (
  <AuthStack.Navigator>
    <Stack.Screen
      name="MainScreen"
      component={Main}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="RegisterScreen" component={Register} options={{ headerShown: false }} />
  </AuthStack.Navigator>

);

const AppScreens = () => (
  <AppStack.Navigator>
    <Stack.Screen name="ProfileScreen" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="EditProfileScreen" component={EditProfile} options={{ headerShown: false }} />
    <Stack.Screen name="ClassesListScreen" component={ClassesList} options={{ headerShown: false }} />
    <Stack.Screen name="ClassNewOneScreen" component={ClassNewOne} options={{ headerShown: false }} />
    <Stack.Screen name="StudentsHeaderScreen" component={StudentsHeader} options={{ headerShown: false }} />
    <Stack.Screen name="StudentsNewOneScreen" component={StudentsNewOne} options={{ headerShown: false }} />
    <Stack.Screen name="AssistanceControlScreen" component={AssistanceControl} options={{ headerShown: false }} />
    <Stack.Screen name="LogOutScreen" component={Logout} options={{ headerShown: false }} />
  </AppStack.Navigator>
);

export default function Route() {
  const { isAuthenticated } = useSelector((store) => store.login);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppScreens />
      ) : (<AuthScreens />)}
    </NavigationContainer>
  );
}
