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


























// import React, { useEffect } from 'react';
// import { View, Text, Image, StyleSheet, Animated } from 'react-native';

// export default function SplashScreen({ navigation }) {
//   const bounceValue = new Animated.Value(0);

//   useEffect(() => {
//     // Bounce animation
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(bounceValue, {
//           toValue: -10,
//           duration: 400,
//           useNativeDriver: true,
//         }),
//         Animated.timing(bounceValue, {
//           toValue: 0,
//           duration: 400,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();

//     // Navigate after 3 seconds
//     const timer = setTimeout(() => {
//       navigation.replace('RoleSelection');
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/logowithoutbackground.png')}
//         style={styles.logo}
//       />
//       <Text style={styles.tagline}>Learn. Teach. Connect.</Text>
//       <Animated.Text style={[styles.musicNote, { transform: [{ translateY: bounceValue }] }]}>
//         🎵
//       </Animated.Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'
//   },
//   logo: {
//     width: 150, height: 150, resizeMode: 'contain', marginBottom: 20
//   },
//   tagline: {
//     fontSize: 18, fontWeight: '600', color: '#333'
//   },
//   musicNote: {
//     fontSize: 30, marginTop: 20
//   }
// });
