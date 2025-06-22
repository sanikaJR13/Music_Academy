import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params; // passed from previous screen

  return (
    <View style={styles.detailContainer}>
      {/* 🔙 Header */}
      <View style={styles.detailHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>{course.title}</Text>
        <View style={{ width: 20 }} /> {/* Empty view to balance header */}
      </View>

      {/* 🖼️ Photo */}
      <Image source={course.image} style={styles.detailImage} />
        <View style={styles.detailHeader}>
        <Text style={styles.detailHeaderTitle}>{course.title}</Text>
        <View style={{ width: 20 }} /> {/* Empty view to balance header */}
      </View>
      {/* 📝 About the Course */}
      <Text style={styles.detailDescription}>{course.description}</Text>

      {/* 💰 Price and Enroll */}
      <View style={styles.detailFooter}>
        <Text style={styles.detailPrice}>₹999</Text>
        <TouchableOpacity style={styles.detailEnrollBtn}>
          <Text style={styles.detailEnrollText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseDetailScreen;
