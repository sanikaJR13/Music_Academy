import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/BatchTTScreenStyle';
import AcademyBottomNavigation from '../../components/AcademyBottomNavigation';

// const batchData = [
//   {
//     id: '1',
//     image: require('../../assets/insturments/theme/GuitarFinal.png'),
//     courseName: 'Guitar Basics',
//     level: 'Beginner',
//     type: 'Online',
//     instrument: 'Guitar',
//     date: '2025-07-6',
//   },
//   {
//     id: '2',
//     image: require('../../assets/insturments/theme/Piano.png'),
//     courseName: 'Piano Mastery',
//     level: 'Advanced',
//     type: 'Offline',
//     instrument: 'Piano',
//     date: '2025-07-7',
//   },
//   {
//     id: '3',
//     image: require('../../assets/insturments/theme/Piano.png'),
//     courseName: 'Piano Mastery',
//     level: 'Advanced',
//     type: 'Offline',
//     instrument: 'Piano',
//     date: '2025-06-30',
//   },
//   {
//     id: '4',
//     image: require('../../assets/insturments/theme/Piano.png'),
//     courseName: 'Piano Mastery',
//     level: 'Advanced',
//     type: 'Offline',
//     instrument: 'Piano',
//     date: '2025-06-30',
//   },
//   {
//     id: '5',
//     image: require('../../assets/insturments/theme/Piano.png'),
//     courseName: 'Piano Mastery',
//     level: 'Advanced',
//     type: 'Offline',
//     instrument: 'Piano',
//     date: '2025-06-30',
//   },
// ];

const batchData = [
  {
    id: '1',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-07-01'
  },
  {
    id: '2',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-07-02'
  },
  {
    id: '3',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-07-03'
  },
  {
    id: '4',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-07-04'
  },
  {  
    id: '5',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-07-05'
  },
  {
    id: '6',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-07-06'
  },
  {
    id: '7',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-07-07'
  },
  {
    id: '8',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-07-08'
  },
  {
    id: '9',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-07-09'
  },
  {
    id: '10',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-07-10'
  },
  {
    id: '11',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-07-11'
  },
  {
    id: '12',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-07-12'
  },
  {
    id: '13',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-07-13'
  },
  {
    id: '14',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-07-14'
  },
  {
    id: '15',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-07-15'
  },
  {
    id: '16',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-07-16'
  },
  {
    id: '17',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-07-17'
  },
  {
    id: '18',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-07-18'
  },
  {
    id: '19',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-07-19'
  },
  {
    id: '20',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-07-20'
  },
  {
    id: '21',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-07-21'
  },
  {
    id: '22',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-07-22'
  },
  {
    id: '23',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-07-23'
  },
  {
    id: '24',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-07-24'
  },
  {
    id: '25',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-07-25'
  },
  {
    id: '26',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-07-26'
  },
  {
    id: '27',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-07-27'
  },
  {
    id: '28',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-07-28'
  },
  {
    id: '29',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-07-29'
  },
  {
    id: '30',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-07-30'
  },
  {
    id: '31',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-07-31'
  },
  {
    id: '32',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-08-01'
  },
  {
    id: '33',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-08-02'
  },
  {
    id: '34',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-08-03'
  },
  {
    id: '35',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-08-04'
  },
  {
    id: '36',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-08-05'
  },
  {
    id: '37',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-08-06'
  },
  {
    id: '38',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-08-07'
  },
  {
    id: '39',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-08-08'
  },
  {
    id: '40',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-08-09'
  },
  {
    id: '41',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-08-10'
  },
  {
    id: '42',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-08-11'
  },
  {
    id: '43',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-08-12'
  },
  {
    id: '44',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-08-13'
  },
  {
    id: '45',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-08-14'
  },
  {
    id: '46',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-08-15'
  },
  {
    id: '47',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-08-16'
  },
  {
    id: '48',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-08-17'
  },
  {
    id: '49',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-08-18'
  },
  {
    id: '50',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-08-19'
  },
  {
    id: '51',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-08-20'
  },
  {
    id: '52',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-08-21'
  },
  {
    id: '53',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-08-22'
  },
  {
    id: '54',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-08-23'
  },
  {
    id: '55',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-08-24'
  },
  {
    id: '56',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-08-25'
  },
  {
    id: '57',
    image: require('../../assets/insturments/theme/Tabala.png'),
    courseName: 'Tabla Taal',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Tabla',
    date: '2025-08-26'
  },
  {
    id: '58',
    image: require('../../assets/insturments/theme/Harmonium.png'),
    courseName: 'Harmonium Ragas',
    level: 'Beginner',
    type: 'Offline',
    instrument: 'Harmonium',
    date: '2025-08-27'
  },
  {
    id: '59',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Keyboard Chords',
    level: 'Advanced',
    type: 'Online',
    instrument: 'Keyboard',
    date: '2025-08-28'
  },
  {
    id: '60',
    image: require('../../assets/insturments/theme/Flute.png'),
    courseName: 'Vocal Sangeet',
    level: 'Intermediate',
    type: 'Hybrid',
    instrument: 'Vocal',
    date: '2025-08-29'
  },
  {
    id: '61',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
    courseName: 'Guitar Basics',
    level: 'Beginner',
    type: 'Online',
    instrument: 'Guitar',
    date: '2025-08-30'
  },
  {
    id: '62',
    image: require('../../assets/insturments/theme/Piano.png'),
    courseName: 'Piano Mastery',
    level: 'Advanced',
    type: 'Offline',
    instrument: 'Piano',
    date: '2025-08-31'
  }
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
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View style={styles.customHeader}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="bars" size={20} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Batch Timetable</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Icon name="calendar" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Date */}
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

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={styles.pickerWrapper}>
              <Picker selectedValue={type} onValueChange={setType} style={styles.pickerStyle}
              dropdownIconColor="#1E3A8A">
                <Picker.Item color="#000" label="All Types" value="" />
                <Picker.Item color="#000" label="Online" value="Online" />
                <Picker.Item color="#000" label="Offline" value="Offline" />
              </Picker>
            </View>
            <View style={styles.pickerWrapper}>
              <Picker selectedValue={instrument} onValueChange={setInstrument} style={styles.pickerStyle}dropdownIconColor="#1E3A8A">
                <Picker.Item color="#000" label="All Instruments" value="" />
                <Picker.Item color="#000" label="Guitar" value="Guitar" />
                <Picker.Item color="#000" label="Piano" value="Piano" />
                <Picker.Item color="#000" label="Tabla" value="Tabla" />
              </Picker>
            </View>
            <View style={styles.pickerWrapper}>
              <Picker selectedValue={level} onValueChange={setLevel} style={styles.pickerStyle} dropdownIconColor="#1E3A8A"
              >
                <Picker.Item color="#000" label="All Levels" value="" />
                <Picker.Item color="#000" label="Beginner" value="Beginner" />
                <Picker.Item color="#000" label="Intermediate" value="Intermediate" />
                <Picker.Item color="#000" label="Advanced" value="Advanced" />
              </Picker>
            </View>
          </View>
        </ScrollView>

        {/* Batch List */}
        <FlatList
          data={filteredBatches}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No batches found for selected filters.</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.image} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{item.courseName}</Text>
              <Text style={styles.courseLevel}>{item.level}</Text>
              <Text style={styles.courseDescription}>{item.type}</Text>
              <Text style={styles.courseDescription}>{item.instrument}</Text>
              <Text style={styles.courseDate}>{item.date}</Text>
            </View>
          )}
        />
      </ScrollView>

      <AcademyBottomNavigation />
    </View>
  );
}