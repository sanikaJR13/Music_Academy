import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';
// import styles from '../OwnerDashBoard/Style/AcademyStyles';
import { useNavigation } from '@react-navigation/native';

const batchData = [
  {
    id: '1',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-06-26',
  },
  {
    id: '2',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-06-26',
  },
  {
    id: '3',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-06-27',
  },
];

export default function BatchTimetableScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [type, setType] = useState('');
  const [instrument, setInstrument] = useState('');
  const [level, setLevel] = useState('');

  const formatDate = (d) => d.toISOString().split('T')[0];

  const filteredBatches = batchData.filter(batch =>
    (!type || batch.type === type) &&
    (!instrument || batch.instrument === instrument) &&
    (!level || batch.level === level) &&
    formatDate(new Date(batch.date)) === formatDate(date)
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: 100 }}>
        {/* <View style={{ flex: 1, backgroundColor: '#F9FAFB', padding: 10 }}> */}
        {/* 🔷 Header */}
        <View style={styles.customHeader}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="bars" size={20} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Batch Timetable</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Icon name="calendar" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* 📅 Date */}
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>{formatDate(date)}</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Icon name="calendar-alt" size={20} color="#1E3A8A" />
          </TouchableOpacity>
        </View>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="calendar"
            onChange={(event, selectedDate) => {
              setShowPicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        {/* 🔽 Filters
      
      <View style={styles.filterContainer}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={type}
            onValueChange={setType}
            style={styles.pickerStyle}
          >
            <Picker.Item label="All Types" value="" />
            <Picker.Item label="Online" value="Online" />
            <Picker.Item label="Offline" value="Offline" />
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={instrument}
            onValueChange={setInstrument}
            style={styles.pickerStyle}
          >
            <Picker.Item color='#000000' label="All Instruments" value="" />
            <Picker.Item color='#000000' label="Guitar" value="Guitar" />
            <Picker.Item color='#000000' label="Piano" value="Piano" />
            <Picker.Item color='#000000' label="Tabla" value="Tabla" />
            <Picker.Item color='#000000' label="Tabla" value="Tabla" />
            <Picker.Item color='#000000' label="Tabla" value="Tabla" />
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={level}
            onValueChange={setLevel}
            style={styles.pickerStyle}
          >
            <Picker.Item color='#000000' label="All Levels" value="" />
            <Picker.Item color='#000000' label="Beginner" value="Beginner" />
            <Picker.Item color='#000000' label="Intermediate" value="Intermediate" />
            <Picker.Item color='#000000' label="Advanced" value="Advanced" />
          </Picker>
        </View>
      </View> */}

    
          {/* 🔽 Type Filter
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={type}
              onValueChange={setType}
              style={styles.pickerStyle}
            >
              <Picker.Item color='#000000' label="All Types" value="" />
              <Picker.Item color='#000000' label="Online" value="Online" />
              <Picker.Item color='#000000' label="Offline" value="Offline" />
            </Picker>
          </View>

          {/* 🔽 Instrument Filter *
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={instrument}
              onValueChange={setInstrument}
              style={styles.pickerStyle}
            >
              <Picker.Item color='#000000' label="All Instruments" value="" />
              <Picker.Item color='#000000' label="Guitar" value="Guitar" />
              <Picker.Item color='#000000' label="Piano" value="Piano" />
              <Picker.Item color='#000000' label="Tabla" value="Tabla" />
            </Picker>
          </View>

          {/* 🔽 Level Filter *
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={level}
              onValueChange={setLevel}
              style={styles.pickerStyle}
            >
              <Picker.Item color='#000000' label="All Levels" value="" />
              <Picker.Item color='#000000' label="Beginner" value="Beginner" />
              <Picker.Item color='#000000' label="Intermediate" value="Intermediate" />
              <Picker.Item color='#000000' label="Advanced" value="Advanced" />
            </Picker>
          </View>
        */}

        <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{ marginVertical: 10 }}
>
  <View style={{ flexDirection: 'row', gap: 10 }}>
    {/* 🔽 Type Filter */}
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={type}
        onValueChange={setType}
        style={styles.pickerStyle}
      >
        <Picker.Item color="#000000" label="All Types" value="" />
        <Picker.Item color="#000000" label="Online" value="Online" />
        <Picker.Item color="#000000" label="Offline" value="Offline" />
      </Picker>
    </View>

    {/* 🔽 Instrument Filter */}
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={instrument}
        onValueChange={setInstrument}
        style={styles.pickerStyle}
      >
        <Picker.Item color="#000000" label="All Instruments" value="" />
        <Picker.Item color="#000000" label="Guitar" value="Guitar" />
        <Picker.Item color="#000000" label="Piano" value="Piano" />
        <Picker.Item color="#000000" label="Tabla" value="Tabla" />
      </Picker>
    </View>

    {/* 🔽 Level Filter */}
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={level}
        onValueChange={setLevel}
        style={styles.pickerStyle}
      >
        <Picker.Item color="#000000" label="All Levels" value="" />
        <Picker.Item color="#000000" label="Beginner" value="Beginner" />
        <Picker.Item color="#000000" label="Intermediate" value="Intermediate" />
        <Picker.Item color="#000000" label="Advanced" value="Advanced" />
      </Picker>
    </View>
  </View>
</ScrollView>


        {/* 🧾 Batch List */}
        <FlatList
          data={filteredBatches}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No batches found for selected filters.</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.courseCard}>
              <Image source={item.image} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{item.courseName}</Text>
              <Text style={styles.courseLevel}>{item.level}</Text>
              <Text style={styles.courseDescription}>{item.type}</Text>
              <Text style={styles.courseDescription}>{item.instrument}</Text>
              <Text style={styles.coursePrice}>{item.date}</Text>
            </View>
          )}
        />
      </ScrollView>

      {/* ⬇️ Sticky Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('AcademyDashBoard')}>
          <Icon name="home" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AcademyProfile')}>
          <Icon name="user" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BatchTimeTable')}>
          <Icon name="calendar-alt" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AcademyCoursesScreen')}>
          <Icon name="book" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Student')}>
          <Icon name="user-graduate" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
          <Icon name="sign-out-alt" size={22} color="#F97316" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
