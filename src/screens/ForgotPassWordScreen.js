import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../styles/universalstyles';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Please enter your email');
      return;
    }

    // TODO: Password reset logic (API call, etc.)
    Alert.alert(
      'Reset Link Sent',
      'Check your email for instructions to reset your password.'
    );
    navigation.navigate('Login');
  };

  return (
    <View style={styles.fcontainer}>
      <Text style={styles.title}>Forgot Password</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Enter your registered email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#6B7280"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleResetPassword}>
        <Text style={styles.loginButtonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Remember your password?{' '}
          <Text style={styles.linkAction} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
