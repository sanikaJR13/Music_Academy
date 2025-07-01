import React, { useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import styles from '../styles/universalstyles'; // use universal styles

export default function SplashScreen({ navigation }) {
  const bounceValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -10,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timer = setTimeout(() => {
      navigation.replace('Feature');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('../assets/logowithoutbackground.png')}
        style={styles.splashLogo}
      />
      <Text style={styles.splashTagline}>Learn. Teach. Connect.</Text>
      <Animated.Text style={[styles.splashNote, { transform: [{ translateY: bounceValue }] }]}>
        🎵
      </Animated.Text>
    </View>
  );
}