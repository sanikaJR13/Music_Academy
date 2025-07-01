import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/universalstyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Owner');

  const logoScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(logoScale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    if (role === 'Owner') navigation.navigate('AcademyDashBoard');
    else if (role === 'Student') navigation.navigate('StudentDashBoard');
    else alert('Role not implemented yet');
  };

  const handleRegister = () => {
  navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
  navigation.navigate('ForgotPassword');
  };


  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logowithoutbackground.png')}
        style={[styles.logo, { transform: [{ scale: logoScale }] }]}
      />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputWrapper}>
        <Icon name="envelope" size={24} color="#6B7280" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#6B7280"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Icon name="lock" size={24} color="#6B7280" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#6B7280"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <Text
        style={styles.forgotPassword}
        onPress={handleForgotPassword}
      >
        Forgot Password?
      </Text>

      <View style={styles.buttonGroup}>
        <Text style={styles.roleLabel}>Select Role:</Text>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === 'Owner' ? styles.roleSelected : styles.roleUnselected,
          ]}
          onPress={() => setRole('Owner')}
        >
          <Icon name="user-tie" size={18} color="#fff" />
          <Text style={styles.roleText}>Owner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleButton,
            role === 'Student' ? styles.roleSelected : styles.roleUnselected,
          ]}
          onPress={() => setRole('Student')}
        >
          <Icon name="user-graduate" size={18} color="#fff" />
          <Text style={styles.roleText}>Student</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Not yet registered?{' '}
          <Text style={styles.linkAction} onPress={handleRegister}
          >
            Register here
          </Text>
        </Text>
      </View>
      </View>
      // </ImageBackground>
    // </View>
  );
}