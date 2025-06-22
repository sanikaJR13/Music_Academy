
import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../styles/universalstyles';

const slides = [
  {
    title: 'Learn From the Best!',
    description: 'Our experienced instructors are professionally trained.',
    image: require('../assets/screen1.png'),
  },
  {
    title: 'Find Music Classes Near You',
    description: 'Easily discover music lessons available in your neighborhood.',
    image: require('../assets/screen2.png'),
  },
  {
    title: 'Start Your Musical Journey',
    description: '',
    image: require('../assets/logowithoutbackground.png'),
  },
];

const FeatureScreen = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <View style={styles.featureContainer}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        onIndexChanged={(index) => setCurrentIndex(index)}
        dotColor="#ccc"
        activeDotColor="#1E3A8A"
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.featureSlide}>
            <Text style={styles.featureTitle}>{slide.title}</Text>
            {slide.description !== '' && (
              <Text style={styles.featureDescription}>{slide.description}</Text>
            )}
            <Image source={slide.image} style={styles.featureImage} />
            {index === slides.length - 1 && (
              <TouchableOpacity
                style={styles.featureStartBtn}
                onPress={() => navigation.replace('Login')}
              >
                <Text style={styles.featureStartBtnText}>Get Started</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>

      {/* Skip & Next Buttons */}
      {currentIndex !== slides.length - 1 && (
        <View style={styles.featureNavigation}>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.featureSkipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.featureNextText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default FeatureScreen;