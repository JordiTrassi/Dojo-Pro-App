import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
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

export default function Route() {
  const { isAuthenticated } = useSelector((store) => store.login);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="EditProfileScreen" component={EditProfile} />
            <Stack.Screen name="ClassesListScreen" component={ClassesList} />
            <Stack.Screen name="ClassNewOneScreen" component={ClassNewOne} />
            <Stack.Screen name="StudentsHeaderScreen" component={StudentsHeader} />
            <Stack.Screen name="StudentsNewOneScreen" component={StudentsNewOne} />
            <Stack.Screen name="AssistanceControlScreen" component={AssistanceControl} />
            <Stack.Screen name="LogOutScreen" component={Logout} />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MainScreen"
              component={Main}
            />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegisterScreen" component={Register} />
            <Stack.Screen name="LogOutScreen" component={Logout} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
