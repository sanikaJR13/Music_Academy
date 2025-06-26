import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AcademyDashboardScreen from '../screens/OwnerDashBoard/AcademyDashboardScreen';
// import SplashScreen from '../screens/SplashScreen';
// import LoginScreen from '../screens/LoginScreen';
// import FeatureScreen from '../screens/FeatureScreen';
// import RegisterScreen from '../screens/RegisterScreen';
// import ForgotPasswordScreen from '../screens/ForgotPassWordScreen';
// import StudentDashboard from '../screens/StudentDashboard/StudentDashboard';
// import CoursesScreen from '../screens/StudentDashboard/CoursesScreen';
// import CourseDetailScreen from '../screens/StudentDashboard/CoursesDetailScreen';
// import ProfileStudent from '../screens/StudentDashboard/ProfileScreen';
// import ChatSection from '../screens/StudentDashboard/ChatSection';
import LogoutScreen from '../screens/StudentDashboard/LogoutScreen';
import AcademyCoursesScreen from '../screens/OwnerDashBoard/AcademyCoursesScreen';
import AcademyProfile from '../screens/OwnerDashBoard/ProfileScreen';
import BatchTimeTable from '../screens/OwnerDashBoard/BatchTimeTable';
import EditProfileScreen from '../screens/OwnerDashBoard/EditProfileScreen';
import AcademyStudent from '../screens/OwnerDashBoard/AcademyStudent';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="AcademyDashBoard">
            {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Feature" component={FeatureScreen} options={{ headerShown: false}}/> 
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/> 
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}}/> 
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/> */} 
            {/* <Stack.Screen name="StudentDashBoard" component={StudentDashboard} options={{ headerShown: false }}/> 
            <Stack.Screen name="Courses" component={CoursesScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="CoursesDetailScreen" component={CourseDetailScreen} options={{ headerShown: false}}/> 
            <Stack.Screen name="Profile" component={ProfileStudent} options={{ headerShown: false}}/>
            <Stack.Screen name="Chat" component={ChatSection} options={{ headerShown: false}}/> */}
            <Stack.Screen name="LogOut" component={LogoutScreen} options={{ headerShown: false}}/>

            {/* -----------------Academy Screens Form here ------------------------------------------ */}
            <Stack.Screen name="AcademyDashBoard" component={AcademyDashboardScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="AcademyCoursesScreen" component={AcademyCoursesScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="AcademyProfile" component={AcademyProfile} options={{ headerShown: false}}/>
            <Stack.Screen name="BatchTimeTable" component={BatchTimeTable} options={{ headerShown: false}}/>
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="AcademyStudent" component={AcademyStudent} options={{ headerShown: false}}/>

    
        
        </Stack.Navigator>
    );
}
