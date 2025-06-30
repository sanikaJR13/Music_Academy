import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/universalstyles';
import AcademyBottomNavigation from '../../components/AcademyBottomNavigation';

const AcademyCourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params;

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(course.title);
  const [price, setPrice] = useState(course.Price);
  const [level, setLevel] = useState(course.level);
  const [description, setDescription] = useState(course.description);

  const handleSave = () => {
    setIsEditing(false);
    console.log('Updated:', { title, price, level, description });
  };

  return (
    <View style={styles.detailContainer}>
      {/* 🔷 Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#FFFFFF" style={{ paddingHorizontal: 12 }} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Academy Course Details</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* 🔽 Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.detailCenterContainer}>
          <Image source={course.image} style={styles.detailImage} />

          {isEditing ? (
            <>
              <Text style={styles.editLabel}>Course Title</Text>
              <TextInput
                style={styles.editInput}
                value={title}
                onChangeText={setTitle}
              />

              <Text style={styles.editLabel}>Course Price</Text>
              <TextInput
                style={styles.editInput}
                value={String(price)}
                onChangeText={setPrice}
                keyboardType="numeric"
              />

              <Text style={styles.editLabel}>Course Level</Text>
              <View style={styles.editPickerWrapper}>
                <Picker
                  selectedValue={level}
                  onValueChange={setLevel}
                  style={styles.editPicker}
                  dropdownIconColor="#1E3A8A"
                >
                  <Picker.Item label="Beginner" value="Beginner" />
                  <Picker.Item label="Intermediate" value="Intermediate" />
                  <Picker.Item label="Advanced" value="Advanced" />
                </Picker>
              </View>

              <Text style={styles.editLabel}>Course Description</Text>
              <TextInput
                style={[styles.editInput, { height: 100, textAlignVertical: 'top' }]}
                value={description}
                onChangeText={setDescription}
                multiline
              />

              <TouchableOpacity
                style={styles.detailEnrollBtn}
                onPress={handleSave}
              >
                <Text style={styles.detailEnrollText}>Save</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.courseTitle}>{title}</Text>

              <View style={styles.aboutPriceRow}>
                <Text style={styles.priceLabel}>Course Price: ₹{price}</Text>
              </View>
              <View style={styles.aboutPriceRow}>
                <Text style={styles.priceLabel}>Course Level: {level}</Text>
              </View>

              <Text style={styles.detailDescription}>{description}</Text>

              <TouchableOpacity
                style={[styles.detailEnrollBtn, { marginTop: 20 }]}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.detailEnrollText}>Edit Course</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>

      <AcademyBottomNavigation />
    </View>
  );
};

export default AcademyCourseDetailScreen;
