import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import styles from '../OwnerDashBoard/Style/AcademyStyles';

const EditProfileScreen = ({ navigation }) => {
  const [academyName, setAcademyName] = useState('Beats Music Academy');
  const [email, setEmail] = useState('info@beatsacademy.com');
  const [contact, setContact] = useState('9876543210');
  const [instruments, setInstruments] = useState(['Guitar', 'Tabla']);

  const allInstruments = ['Guitar', 'Tabla', 'Piano', 'Violin'];

  const toggleInstrument = (instrument) => {
    setInstruments((prev) =>
      prev.includes(instrument)
        ? prev.filter((item) => item !== instrument)
        : [...prev, instrument]
    );
  };

  const handleSave = () => {
    if (!academyName.trim() || !email.trim() || !contact.trim()) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }
    // You can add backend update logic here
    Alert.alert('Success', 'Profile updated successfully!');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <Text style={styles.sectionHeading}>Edit Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Academy Name"
        value={academyName}
        onChangeText={setAcademyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        value={contact}
        onChangeText={setContact}
      />

      <Text style={styles.sectionHeading}>Instruments</Text>
      <View style={styles.instrumentList}>
        {allInstruments.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.instrumentTag,
              instruments.includes(item) && { backgroundColor: '#1E3A8A' },
            ]}
            onPress={() => toggleInstrument(item)}
          >
            <Text
              style={[
                styles.instrumentText,
                instruments.includes(item) && { color: '#FFFFFF' },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfileScreen;
