import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';
import BottomNavigation from '../../components/BottomNavigation';

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params;
  const [step, setStep] = useState('detail'); 

  return (
    <View style={styles.detailContainer}>
      {/* 🔷 Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Icon name="bars" size={20} color="#FFFFFF" style={{ paddingHorizontal: 12 }} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Courses Screen</Text>
        <TouchableOpacity onPress={() => console.log('Notifications')}>
          <Icon name="bell" size={20} color="#FFFFFF" style={{ paddingHorizontal: 12 }} />
        </TouchableOpacity>
      </View>

      {/* 🔽 Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.detailCenterContainer}>
          {step === 'detail' && (
            <>
              <Image source={course.image} style={styles.detailImage} />
              <Text style={styles.courseTitle}>{course.title}</Text>

              <View style={styles.aboutPriceRow}>
                <Text style={styles.aboutLabel}>About Course</Text>
              </View>
              <View style={styles.aboutPriceRow}>
                <Text style={styles.priceLabel}>Course Price: ₹{course.Price}</Text>
              </View>
              <View style={styles.aboutPriceRow}>
                <Text style={styles.priceLabel} >Course Level: {course.level}</Text>
              </View>

              <Text style={styles.detailDescription}>{course.description}</Text>
              <View paddingTop="25">
                <TouchableOpacity
                  style={styles.detailEnrollBtn}
                  onPress={() => setStep('payment')}
                >
                  <Text style={styles.detailEnrollText}>Enroll Now</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {step === 'payment' && (
            <><Text style={styles.courseTitle}>Start Your journey with Music Academy and Boost Your musical Career! </Text>
              <Text style={styles.paymentTitle}>Pay Fees</Text>
              <Text style={styles.paymentDescription}>
                Proceed to pay ₹{course.Price} to enroll in "{course.title}".
              </Text>
              <TouchableOpacity
                style={styles.detailEnrollBtn}
                onPress={() => setStep('success')}
              >
                <Text style={styles.detailEnrollText}>Pay Fees</Text>
              </TouchableOpacity>
            </>
          )}

          {step === 'success' && (
            <>
              <Text style={styles.successIcon}>🎉</Text>
              <Text style={styles.successTitle}>Enrollment Successful!</Text>
              <Text style={styles.successDescription}>
                Thank you for enrolling in "{course.title}"!
              </Text>
              <TouchableOpacity
                style={styles.detailEnrollBtn}
                onPress={() => setStep('welcome')}
              >
                <Text style={styles.detailEnrollText}>Start Learning</Text>
              </TouchableOpacity>
            </>
          )}
          {step === 'welcome' && (
            <View style={styles.PaymentandENrollment}>
              <Text style={styles.successIcon}>🎵</Text>
              <Text style={styles.successTitle}>Welcome to the Music Academy!!</Text>
              <Text style={styles.successDescription}>
                Now you can start your learning journey with us. Dive into your courses and enjoy music like never before!
              </Text>
            </View>
          )}

        </View>
      </ScrollView>

      {/* ⬇ Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

export default CourseDetailScreen;