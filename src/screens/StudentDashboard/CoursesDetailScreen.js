import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params;
  const [step, setStep] = useState('detail'); // 'detail' | 'payment' | 'success'

  return (
    <View style={styles.detailContainer}>
      {/* 🔷 Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Icon name="bars" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Music Academy</Text>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.detailCenterContainer}>
        {/* 🧠 Conditional UI */}
        {step === 'detail' && (
          <>
            <Image source={course.image} style={styles.detailImage} />
            <Text style={styles.courseTitle}>{course.title}</Text>
            <View style={styles.aboutPriceRow}>
              <Text style={styles.aboutLabel}>About Course</Text>
              <Text style={styles.priceLabel}>₹{course.price}</Text>
            </View>
            <View style={styles.aboutPriceRow}>
              <Text style={styles.priceLabel}>{course.Level}</Text>
            </View>
            <Text style={styles.detailDescription}>{course.description}</Text>
            <TouchableOpacity
              style={styles.detailEnrollBtn}
              onPress={() => setStep('payment')}
            >
              <Text style={styles.detailEnrollText}>Enroll Now</Text>
            </TouchableOpacity>
          </>
        )}

         {/* {step === 'payment' && (
          <>
            <Text style={styles.courseTitle}>Pay Fees</Text>
            <Text style={styles.detailDescription}>
              Proceed to pay ₹{course.price} to enroll in "{course.title}".
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
            <Text style={styles.courseTitle}> Enrollment Successful!🎉</Text>
            <Text style={styles.detailDescription}>
              Thank you for enrolling in "{course.title}"!
            </Text>
            <TouchableOpacity
              style={styles.detailEnrollBtn}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.detailEnrollText}>Go to Home</Text>
            </TouchableOpacity>
          </>
        )}
      </View>  */}
      <View style={styles.PaymentandENrollment}> 

      
      {step === 'payment' && (
  <>
    <Text style={styles.paymentTitle}>Pay Fees</Text>
    <Text style={styles.paymentDescription}>
      Proceed to pay ₹{course.price} to enroll in "{course.title}".
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
      onPress={() => navigation.navigate('Home')}
    >
      <Text style={styles.detailEnrollText}>Start Learning </Text>
    </TouchableOpacity>
  </>
)} </View>
</View>


      {/* 🔽 Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
          <Icon name="sign-out-alt" size={22} color="#F97316" />
        </TouchableOpacity>
      </View>
    </View>
   
  );
};

export default CourseDetailScreen;
