// src/screens/BatchTimetableScreen.js
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, FlatList, Image,ScrollView
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';
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
    date: '2025-06-27',
  },
  // Add more batches here...
];

export default function BatchTimetableScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [type, setType] = useState('');
  const [instrument, setInstrument] = useState('');
  const [level, setLevel] = useState('');

  const formatDate = (d) => d.toISOString().split('T')[0];

  const filteredBatches = batchData.filter(batch => {
    return (
      (!type|| batch.type === type) &&
      (!instrument || batch.instrument === instrument) &&
      (!level || batch.level === level) &&
      formatDate(new Date(batch.date)) === formatDate(date)
    );
  });

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

    
    <View style={{ flex: 1, backgroundColor: '#F9FAFB', padding: 10 }}>
      {/* 🔷 Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Batch Timetable</Text>
        {/* <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Icon name="calendar-alt" size={20} color="#FFF" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => console.log('Notifications')}>
          <Icon name="bell" size={20} color="#FFFFFF" paddingHorizontal="15"/>
        </TouchableOpacity>
      </View>

      {/* 📅 Date Picker */}
       
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: '600', fontSize: 16, marginRight: 8, color: '#1E3A8A' }}>
          {formatDate(date)}
        </Text>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Icon name="calendar" size={20} color="#1E3A8A" />
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Picker
            selectedValue={typeFilter}
            style={styles.picker}
            onValueChange={(value) => setTypeFilter(value)}
          >
            <Picker.Item label="All Types" value="" />
            <Picker.Item label="Online" value="Online" />
            <Picker.Item label="Offline" value="Offline" />
          </Picker>
        </View>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Picker
            selectedValue={instrumentFilter}
            style={styles.picker}
            onValueChange={(value) => setInstrumentFilter(value)}
          >
            <Picker.Item label="All Instruments" value="" />
            <Picker.Item label="Guitar" value="Guitar" />
            <Picker.Item label="Piano" value="Piano" />
            <Picker.Item label="Tabla" value="Tabla" />
            <Picker.Item label="Flute" value="Flute" />
          </Picker>
        </View>
        <View style={{ flex: 1 }}>
          <Picker
            selectedValue={levelFilter}
            style={styles.picker}
            onValueChange={(value) => setLevelFilter(value)}
          >
            <Picker.Item label="All Levels" value="" />
            <Picker.Item label="Beginner" value="Beginner" />
            <Picker.Item label="Intermediate" value="Intermediate" />
            <Picker.Item label="Advanced" value="Advanced" />
          </Picker>
        </View>
      </View> */}

      {/* <View style={styles.filterContainer}>
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
      <Picker.Item label="All Instruments" value="" />
      <Picker.Item label="Guitar" value="Guitar" />
      {/* Add others 
    </Picker>
  </View>

  <View style={styles.pickerWrapper}>
    <Picker
      selectedValue={level}
      onValueChange={setLevel}
      style={styles.pickerStyle}
    >
      <Picker.Item label="All Levels" value="" />
      <Picker.Item label="Beginner" value="Beginner" />
      <Picker.Item label="Beginner" value="Beginner" />
      <Picker.Item label="Beginner" value="Beginner" />
      {/* Add others *
    </Picker>
  </View>
// </View> */}


      {/* 🎓 Batch Cards */}
      <FlatList
        data={filteredBatches}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#9CA3AF', marginTop: 20 }}>
            No batches found for selected filters.
          </Text>
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

      {/* 🔽 Sticky Bottom Navigation */}
      <View style={[styles.bottomBar, {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E5E7EB',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }]}>
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
    </ScrollView>
  );
}

















// import React, { useState } from 'react';
// import {
//   View, Text, FlatList, TouchableOpacity, Image,
//   SafeAreaView, Modal, Platform
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Picker } from '@react-native-picker/picker';
// import { Calendar } from 'react-native-calendars';
// import styles from '../../styles/universalstyles';
// import { useNavigation } from '@react-navigation/native';

// const dummyBatches = [
//   {
//     id: '1',
//     courseName: 'Guitar Basics',
//     image: require('../../assets/insturments/theme/GuitarFinal.png'),
//     time: '4:00 PM',
//     date: '2025-06-26',
//     type: 'Offline',
//     level: 'Beginner',
//     instrument: 'Guitar',
//   },
//   {
//     id: '2',
//     courseName: 'Piano Chords',
//     image: require('../../assets/insturments/theme/Piano.png'),
//     time: '6:30 PM',
//     date: '2025-06-28',
//     type: 'Online',
//     level: 'Intermediate',
//     instrument: 'Piano',
//   },
// ];

// export default function BatchTimetableScreen() {
//   const navigation = useNavigation();
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [instrument, setInstrument] = useState('');
//   const [level, setLevel] = useState('');
//   const [type, setType] = useState('');

//   const filteredBatches = dummyBatches.filter((batch) => {
//     const dateMatch = selectedDate === batch.date;
//     const instrumentMatch = instrument ? batch.instrument === instrument : true;
//     const levelMatch = level ? batch.level === level : true;
//     const typeMatch = type ? batch.type === type : true;
//     return dateMatch && instrumentMatch && levelMatch && typeMatch;
//   });

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* 🔷 Header */}
//       <View style={styles.customHeader}>
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <Icon name="bars" size={20} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Batch Timetable</Text>
       
//       </View>

//       {/* 📅 Calendar Modal */}
//       <Modal visible={showCalendar} animationType="slide" transparent>
//         <View style={{
//           flex: 1, justifyContent: 'center',
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           padding: 20
//         }}>
//           <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
//             <Calendar
//               onDayPress={(day) => {
//                 setSelectedDate(day.dateString);
//                 setShowCalendar(false);
//               }}
//               markedDates={{
//                 [selectedDate]: {
//                   selected: true,
//                   marked: true,
//                   selectedColor: '#1E3A8A',
//                 },
//               }}
//               theme={{
//                 selectedDayTextColor: '#fff',
//                 todayTextColor: '#FACC15',
//                 arrowColor: '#1E3A8A',
//               }}
//             />
//             <TouchableOpacity onPress={() => setShowCalendar(false)} style={{ padding: 10 }}>
//               <Text style={{ textAlign: 'center', color: '#1E3A8A' }}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//  <TouchableOpacity onPress={() => setShowCalendar(true)}>
//           <Icon name="calendar-alt" size={20} color="#FFFFFF" />
//         </TouchableOpacity>
//       {/* 🎚️ Filters */}
//       <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
//         {/* Course Type Filter */}
//         <Picker
//           selectedValue={type}
//           onValueChange={(value) => setType(value)}
//           style={styles.picker}
//         >
//           <Picker.Item label="All Types" value="" />
//           <Picker.Item label="Online" value="Online" />
//           <Picker.Item label="Offline" value="Offline" />
//         </Picker>

//         {/* Instrument Filter */}
//         <Picker
//           selectedValue={instrument}
//           onValueChange={(value) => setInstrument(value)}
//           style={styles.picker}
//         >
//           <Picker.Item label="All Instruments" value="" />
//           <Picker.Item label="Guitar" value="Guitar" />
//           <Picker.Item label="Piano" value="Piano" />
//           <Picker.Item label="Flute" value="Flute" />
//           <Picker.Item label="Tabla" value="Tabla" />
//           <Picker.Item label="Harmonium" value="Harmonium" />
//         </Picker>

//         {/* Level Filter */}
//         <Picker
//           selectedValue={level}
//           onValueChange={(value) => setLevel(value)}
//           style={styles.picker}
//         >
//           <Picker.Item label="All Levels" value="" />
//           <Picker.Item label="Beginner" value="Beginner" />
//           <Picker.Item label="Intermediate" value="Intermediate" />
//           <Picker.Item label="Advanced" value="Advanced" />
//         </Picker>
//       </View>

//       {/* 🧾 Batch List */}
//       <FlatList
//         data={filteredBatches}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ paddingBottom: 120, padding: 10 }}
//         renderItem={({ item }) => (
//           <View style={styles.courseCard}>
//             <Image source={item.image} style={styles.courseImage} />
//             <Text style={styles.courseTitle}>{item.courseName}</Text>
//             <Text style={styles.courseLevel}>Time: {item.time} | Date: {item.date}</Text>
//             <Text style={styles.courseDescription}>
//               {item.type} | {item.level}
//             </Text>
//             <Text style={styles.coursePrice}>Instrument: {item.instrument}</Text>
//           </View>
//         )}
//         ListEmptyComponent={
//           <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>
//             No batches found for selected filters.
//           </Text>
//         }
//       />

//       {/* 🔽 Sticky Bottom Bar */}
//       <View style={[styles.bottomBar, {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: '#FFFFFF',
//         borderTopWidth: 1,
//         borderColor: '#E5E7EB',
//         paddingVertical: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//       }]}>
//         <TouchableOpacity onPress={() => navigation.navigate('AcademyDashBoard')}>
//           <Icon name="home" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('AcademyProfile')}>
//           <Icon name="user" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('BatchTimeTable')}>
//           <Icon name="calendar-alt" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('AcademyCoursesScreen')}>
//           <Icon name="book" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Student')}>
//           <Icon name="user-graduate" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
//           <Icon name="sign-out-alt" size={22} color="#F97316" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }
















// // import React, { useState } from 'react';
// // import {
// //   View, Text, FlatList, TouchableOpacity,
// //   Image, SafeAreaView
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome5';
// // import { Picker } from '@react-native-picker/picker';
// // import { Calendar } from 'react-native-calendars';
// // import styles from '../../styles/universalstyles';
// // import { useNavigation } from '@react-navigation/native';

// // const dummyBatches = [
// //   {
// //     id: '1',
// //     courseName: 'Guitar Basics',
// //     image: require('../../assets/insturments/theme/GuitarFinal.png'),
// //     time: '4:00 PM',
// //     date: '2025-06-27',
// //     type: 'Offline',
// //     level: 'Beginner',
// //     instrument: 'Guitar',
// //   },
// //   {
// //     id: '2',
// //     courseName: 'Piano Chords',
// //     image: require('../../assets/insturments/theme/Piano.png'),
// //     time: '6:30 PM',
// //     date: '2025-06-28',
// //     type: 'Online',
// //     level: 'Intermediate',
// //     instrument: 'Piano',
// //   },
// //   // ➕ Add more batches as needed
// // ];

// // export default function BatchTimetableScreen() {
// //   const navigation = useNavigation();
// //   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
// //   const [instrument, setInstrument] = useState('');
// //   const [level, setLevel] = useState('');

// //   const filteredBatches = dummyBatches.filter((batch) => {
// //     const dateMatch = selectedDate === batch.date;
// //     const instrumentMatch = instrument ? batch.instrument === instrument : true;
// //     const levelMatch = level ? batch.level === level : true;
// //     return dateMatch && instrumentMatch && levelMatch;
// //   });

// //   return (
// //     <SafeAreaView style={{ flex: 1 }}>
// //       {/* 🔷 Header */}
// //       <View style={styles.customHeader}>
// //         <TouchableOpacity onPress={() => navigation.openDrawer()}>
// //           <Icon name="bars" size={20} color="#FFFFFF" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Batch Timetable</Text>
// //         <View style={{ width: 20 }} />
// //       </View>

// //       {/* 📅 Calendar */}
// //       <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
// //         <Text style={styles.filterLabel}>Select Date</Text>
// //         <Calendar
// //           onDayPress={(day) => setSelectedDate(day.dateString)}
// //           markedDates={{
// //             [selectedDate]: {
// //               selected: true,
// //               marked: true,
// //               selectedColor: '#1E3A8A',
// //             },
// //           }}
// //           theme={{
// //             selectedDayTextColor: '#fff',
// //             todayTextColor: '#FACC15',
// //             arrowColor: '#1E3A8A',
// //           }}
// //           style={{
// //             borderRadius: 12,
// //             elevation: 3,
// //           }}
// //         />
// //       </View>

// //       {/* 🎚️ Filter Section */}
// //       <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
// //         <Text style={styles.filterLabel}>Filter</Text>

// //         {/* 🎸 Instrument Picker */}
// //         <Picker
// //           selectedValue={instrument}
// //           onValueChange={(value) => setInstrument(value)}
// //           style={styles.picker}
// //         >
// //           <Picker.Item label="All Instruments" value="" />
// //           <Picker.Item label="Guitar" value="Guitar" />
// //           <Picker.Item label="Piano" value="Piano" />
// //           <Picker.Item label="Flute" value="Flute" />
// //           <Picker.Item label="Tabla" value="Tabla" />
// //           <Picker.Item label="Harmonium" value="Harmonium" />
// //         </Picker>

// //         {/* 🏷️ Level Picker */}
// //         <Picker
// //           selectedValue={level}
// //           onValueChange={(value) => setLevel(value)}
// //           style={styles.picker}
// //         >
// //           <Picker.Item label="All Levels" value="" />
// //           <Picker.Item label="Beginner" value="Beginner" />
// //           <Picker.Item label="Intermediate" value="Intermediate" />
// //           <Picker.Item label="Advanced" value="Advanced" />
// //         </Picker>
// //       </View>

// //       {/* 🧾 Batch List */}
// //       <FlatList
// //         data={filteredBatches}
// //         keyExtractor={(item) => item.id}
// //         contentContainerStyle={{ paddingBottom: 120, padding: 10 }}
// //         renderItem={({ item }) => (
// //           <View style={styles.courseCard}>
// //             <Image source={item.image} style={styles.courseImage} />
// //             <Text style={styles.courseTitle}>{item.courseName}</Text>
// //             <Text style={styles.courseLevel}>Time: {item.time} | Date: {item.date}</Text>
// //             <Text style={styles.courseDescription}>
// //               {item.type} | {item.level}
// //             </Text>
// //             <Text style={styles.coursePrice}>Instrument: {item.instrument}</Text>
// //           </View>
// //         )}
// //         ListEmptyComponent={
// //           <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>
// //             No batches found for selected filters.
// //           </Text>
// //         }
// //       />

// //       {/* 🔽 Sticky Bottom Bar */}
// //       <View style={[styles.bottomBar, {
// //         position: 'absolute',
// //         bottom: 0,
// //         left: 0,
// //         right: 0,
// //         backgroundColor: '#FFFFFF',
// //         borderTopWidth: 1,
// //         borderColor: '#E5E7EB',
// //         paddingVertical: 10,
// //         flexDirection: 'row',
// //         justifyContent: 'space-around',
// //       }]}>
// //         <TouchableOpacity onPress={() => navigation.navigate('AcademyDashBoard')}>
// //           <Icon name="home" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('AcademyProfile')}>
// //           <Icon name="user" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('BatchTimeTable')}>
// //           <Icon name="calendar-alt" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('AcademyCoursesScreen')}>
// //           <Icon name="book" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('Student')}>
// //           <Icon name="user-graduate" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
// //           <Icon name="sign-out-alt" size={22} color="#F97316" />
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }






































// // // import { StyleSheet, Text, View } from 'react-native'
// // // import React from 'react'

// // // const BatchTimeTable = () => {
// // //   return (
// // //     <View>
// // //       <Text>BatchTimeTable</Text>
// // //     </View>
// // //   )
// // // }

// // // export default BatchTimeTable

// // // const styles = StyleSheet.create({})