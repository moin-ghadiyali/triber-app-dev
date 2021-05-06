import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import Login from './src/components/LoginScreen/Login';
import SignUp from './src/components/SignUpScreen/SignUp';
import OTP from './src/components/OTPScreen/OTP';
import ForgotPassword from './src/components/ForgotPasswordScreen/ForgotPassword';
import SplashScreen from './src/components/SplashScreen/SplashScreen';
import Dashboard from './src/components/DashboardScreen/Dashboard';
import BottomNavigator from './src/components/BottomNavigation/BottomNavigation';
import Search from './src/components/SearchScreen/Search';
// import Chat from './src/components/ChatScreen/Chat'; 
import Profile from './src/components/ProfileScreen/Profile';
import Post from './src/components/PostScreen/Post';
import FingerPrint from './src/components/TouchIDAuth/FingerPrint';
// import ChatRoom from './src/components/ChatScreen/ChatRoom';
import Settings from './src/components/SettingsScreen/Settings';
import {Posts} from './src/components/ProfileScreen/Profile';
import EditProfile from './src/components/EditProfileScreen/EditProfile';

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const MyTransition2 = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const MyTransition3 = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name='FingerPrint' component={FingerPrint} options={{ ...MyTransition }} /> */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{...MyTransition}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{...MyTransition3}}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{...MyTransition2}}
          />
          <Stack.Screen
            name="Posts"
            component={Posts}
            options={{...MyTransition3}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{...MyTransition2}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{...MyTransition2}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
