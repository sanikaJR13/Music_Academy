import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from '../screens/SplashScreen';
// import LoginScreen from '../screens/LoginScreen';
// import FeatureScreen from '../screens/FeatureScreen';
// import RegisterScreen from '../screens/RegisterScreen';
// import ForgotPasswordScreen from '../screens/ForgotPassWordScreen';
// import StudentDashboard from '../screens/StudentDashboard/StudentDashboard';
import CoursesScreen from '../screens/StudentDashboard/CoursesScreen';
import CourseDetailScreen from '../screens/StudentDashboard/CoursesDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Courses">
            {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Feature" component={FeatureScreen} options={{ headerShown: false}}/> 
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/> 
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}}/> 
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/> 
            <Stack.Screen name="StudentDashBoard" component={StudentDashboard} options={{ headerShown: false }}/>  */}
            <Stack.Screen name="Courses" component={CoursesScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="CoursesDetailScreen" component={CourseDetailScreen} options={{ headerShown: false}}/> 
        </Stack.Navigator>
    );
}
