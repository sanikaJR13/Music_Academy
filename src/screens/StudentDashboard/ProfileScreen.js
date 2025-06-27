import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomNavigation from '../../components/BottomNavigation';
import styles from '../../styles/ProfileScreenStyles';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState('Ram Bhosale');
  const [email, setEmail] = useState('rambhosale@gmail.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [instrument, setInstrument] = useState('Guitar');
  const [batchTime, setBatchTime] = useState('6:00 PM - 7:00 PM');
  const [batchType, setBatchType] = useState('Online');
  const [level, setLevel] = useState('Beginner');
  const navigation = useNavigation();


  const toggleEdit = () => setIsEditing(true);
  const saveProfile = () => setIsEditing(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* 🔷 Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Icon name="bars" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => console.log('Notifications')}>
          <Icon name="bell" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../assets/insturments/theme/Harmonium.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="edit" size={16} color="#fff" onPress={toggleEdit} />
          </TouchableOpacity>
        </View>

        {isEditing ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Full Name"
              placeholderTextColor="#6B7280"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#6B7280"
            />
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Contact Number"
              keyboardType="phone-pad"
              placeholderTextColor="#6B7280"
            />
            <TextInput
              style={styles.input}
              value={instrument}
              onChangeText={setInstrument}
              placeholder="Preferred Instrument"
              placeholderTextColor="#6B7280"
            />
            <TextInput
              style={styles.input}
              value={batchTime}
              onChangeText={setBatchTime}
              placeholder="Batch Time"
              placeholderTextColor="#6B7280"
            />
            <TextInput
              style={styles.input}
              value={batchType}
              onChangeText={setBatchType}
              placeholder="Batch Type (Online/Offline/Hybrid)"
              placeholderTextColor="#6B7280"
            />
            <TextInput
              style={styles.input}
              value={level}
              onChangeText={setLevel}
              placeholder="Level (Beginner/Intermediate/Advanced)"
              placeholderTextColor="#6B7280"
            />
          </View>
        ) : (
          <View style={styles.detailsView}>
            <DetailItem label="Name" value={name} />
            <DetailItem label="Email" value={email} />
            <DetailItem label="Contact Number" value={phone} />
            <DetailItem label="Preferred Instrument" value={instrument} />
            <DetailItem label="Batch Time" value={batchTime} />
            <DetailItem label="Batch Type" value={batchType} />
            <DetailItem label="Level" value={level} />
          </View>
        )}

        <View style={styles.optionsContainer}>
          {isEditing && (
            <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          )}


          {/* Logout Button */}
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() => navigation.replace('LogOut')}
          >
            <Text style={styles.signOutText}>Logout</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  );
};

const DetailItem = ({ label, value }) => (
  <View style={{ marginBottom: 12, width: '100%' }}>
    <Text style={{ fontSize: 14, color: '#6B7280' }}>{label}</Text>
    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1F2937' }}>{value}</Text>
  </View>
);

export default ProfileScreen;