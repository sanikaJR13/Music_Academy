import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/AcademyDashboardStyle';
import AcademyBottomNavigation from '../../components/AcademyBottomNavigation';
import { useNavigation } from '@react-navigation/native';

const sampleStudents = [
  {
    id: '1',
    name: 'Aarav Patil',
    phone: '9876543201',
    email: 'aarav.patil@example.com',
    course: 'Tabla',
    batch: 'Morning',
    joinDate: '2025-01-10',
    address: 'Kolhapur, MH',
    feeStatus: 'Paid',
  },
  {
    id: '2',
    name: 'Riya Deshmukh',
    phone: '9821034567',
    email: 'riya.deshmukh@example.com',
    course: 'Harmonium',
    batch: 'Evening',
    joinDate: '2025-01-15',
    address: 'Nagpur, MH',
    feeStatus: 'Unpaid',
  },
  {
    id: '3',
    name: 'Om Jadhav',
    phone: '9934567890',
    email: 'om.jadhav@example.com',
    course: 'Guitar',
    batch: 'Afternoon',
    joinDate: '2025-02-05',
    address: 'Pune, MH',
    feeStatus: 'Paid',
  },
  {
    id: '4',
    name: 'Tanvi Bhosale',
    phone: '9988776655',
    email: 'tanvi.bhosale@example.com',
    course: 'Keyboard',
    batch: 'Morning',
    joinDate: '2025-03-12',
    address: 'Sangli, MH',
    feeStatus: 'Paid',
  },
  {
    id: '5',
    name: 'Prathamesh Shinde',
    phone: '9765432190',
    email: 'prathamesh.shinde@example.com',
    course: 'Tabla',
    batch: 'Evening',
    joinDate: '2025-02-25',
    address: 'Solapur, MH',
    feeStatus: 'Unpaid',
  },
  {
    id: '6',
    name: 'Sneha Pawar',
    phone: '9876512340',
    email: 'sneha.pawar@example.com',
    course: 'Vocal',
    batch: 'Morning',
    joinDate: '2025-03-01',
    address: 'Mumbai, MH',
    feeStatus: 'Paid',
  },
  {
    id: '7',
    name: 'Kunal More',
    phone: '9812345678',
    email: 'kunal.more@example.com',
    course: 'Guitar',
    batch: 'Evening',
    joinDate: '2025-01-20',
    address: 'Nashik, MH',
    feeStatus: 'Unpaid',
  },
  {
    id: '8',
    name: 'Mrunal Kadam',
    phone: '9898989898',
    email: 'mrunal.kadam@example.com',
    course: 'Harmonium',
    batch: 'Afternoon',
    joinDate: '2025-02-28',
    address: 'Aurangabad, MH',
    feeStatus: 'Paid',
  },
  {
    id: '9',
    name: 'Siddharth Pawaskar',
    phone: '9876501234',
    email: 'siddharth.pawaskar@example.com',
    course: 'Keyboard',
    batch: 'Morning',
    joinDate: '2025-03-18',
    address: 'Thane, MH',
    feeStatus: 'Paid',
  },
  {
    id: '10',
    name: 'Vaishnavi Kharat',
    phone: '9822012345',
    email: 'vaishnavi.kharat@example.com',
    course: 'Vocal',
    batch: 'Evening',
    joinDate: '2025-01-22',
    address: 'Satara, MH',
    feeStatus: 'Unpaid',
  },
  {
    id: '11',
    name: 'Tushar Gaikwad',
    phone: '9988012345',
    email: 'tushar.gaikwad@example.com',
    course: 'Tabla',
    batch: 'Morning',
    joinDate: '2025-03-25',
    address: 'Latur, MH',
    feeStatus: 'Paid',
  },
  {
    id: '12',
    name: 'Shruti Zende',
    phone: '9999012345',
    email: 'shruti.zende@example.com',
    course: 'Guitar',
    batch: 'Evening',
    joinDate: '2025-04-01',
    address: 'Beed, MH',
    feeStatus: 'Unpaid',
  },
  {
    id: '13',
    name: 'Rohit Kamble',
    phone: '9876001234',
    email: 'rohit.kamble@example.com',
    course: 'Vocal',
    batch: 'Afternoon',
    joinDate: '2025-03-30',
    address: 'Jalgaon, MH',
    feeStatus: 'Paid',
  },
  {
    id: '14',
    name: 'Sakshi Thorat',
    phone: '9876098765',
    email: 'sakshi.thorat@example.com',
    course: 'Keyboard',
    batch: 'Morning',
    joinDate: '2025-04-05',
    address: 'Amravati, MH',
    feeStatus: 'Paid',
  },
  {
    id: '15',
    name: 'Ajinkya Salunkhe',
    phone: '9911223344',
    email: 'ajinkya.salunkhe@example.com',
    course: 'Tabla',
    batch: 'Evening',
    joinDate: '2025-04-10',
    address: 'Kolhapur, MH',
    feeStatus: 'Unpaid',
  },
  {
    id: '16',
    name: 'Pooja Londhe',
    phone: '9822001122',
    email: 'pooja.londhe@example.com',
    course: 'Vocal',
    batch: 'Afternoon',
    joinDate: '2025-03-10',
    address: 'Pune, MH',
    feeStatus: 'Paid',
  },
  {
    id: '17',
    name: 'Swapnil Kute',
    phone: '9812233445',
    email: 'swapnil.kute@example.com',
    course: 'Guitar',
    batch: 'Morning',
    joinDate: '2025-01-12',
    address: 'Nanded, MH',
    feeStatus: 'Unpaid',
  },
  {
    id: '18',
    name: 'Neha Gawade',
    phone: '9800123456',
    email: 'neha.gawade@example.com',
    course: 'Harmonium',
    batch: 'Evening',
    joinDate: '2025-02-22',
    address: 'Palghar, MH',
    feeStatus: 'Paid',
  },
  {
    id: '19',
    name: 'Yash Dhumal',
    phone: '9777123456',
    email: 'yash.dhumal@example.com',
    course: 'Keyboard',
    batch: 'Afternoon',
    joinDate: '2025-03-02',
    address: 'Pune, MH',
    feeStatus: 'Paid',
  },
  {
    id: '20',
    name: 'Revati Phadke',
    phone: '9733012345',
    email: 'revati.phadke@example.com',
    course: 'Vocal',
    batch: 'Morning',
    joinDate: '2025-04-12',
    address: 'Nagpur, MH',
    feeStatus: 'Unpaid',
  },
];

const AcademyStudentScreen = () => {
  const [students, setStudents] = useState(sampleStudents);
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState('All');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const navigation = useNavigation();
  const filteredStudents =
    filter === 'All'
      ? students
      : students.filter((student) => student.feeStatus === filter);

  return (
    <View style={styles.container}>
      {/* 🔷 Custom Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Icon name="bars" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Students</Text>
        <TouchableOpacity
          onPress={() => console.log('Notifications')}
          style={{ marginRight: 10 }}
        >
          <Icon name="bell" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* 🔶 Title and Add */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Students</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>

      </View>

      {/* 🔹 Filter */}
      <View style={styles.filterRow}>
        {['All', 'Paid', 'Unpaid'].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterButton,
              filter === status && styles.activeFilter,
            ]}
            onPress={() => setFilter(status)}
          >
            <Text style={styles.filterText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🔸 List */}
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => toggleExpand(item.id)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <Text
                style={[
                  styles.status,
                  {
                    backgroundColor:
                      item.feeStatus === 'Paid' ? '#22c55e' : '#ef4444',
                  },
                ]}
              >
                {item.feeStatus}
              </Text>
            </View>
            {expandedId === item.id && (
              <View style={styles.details}>
                <Text>📞 {item.phone}</Text>
                <Text>✉️ {item.email}</Text>
                <Text>🎓 Course: {item.course}</Text>
                <Text>📆 Joined: {item.joinDate}</Text>
                <Text>🕑 Batch: {item.batch}</Text>
                <Text>📍 Address: {item.address}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />

      <AcademyBottomNavigation />
    </View>
  );
};

export default AcademyStudentScreen;
