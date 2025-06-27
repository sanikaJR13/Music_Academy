import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from '../../styles/universalstyles';
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from '../../components/BottomNavigation';

const LogoutScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
  const [successVisible, setSuccessVisible] = useState(false);

  const confirmLogout = () => {
    setModalVisible(false);
    setSuccessVisible(true);

    // Simulate logout and then navigate to login after a short delay
    setTimeout(() => {
      setSuccessVisible(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 1500); // 1.5 seconds
  };

  return (
    <View style={styles.containerCenter}>
      {/* Logout Confirmation Modal */}
      <Modal transparent animationType="fade" visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.heading}>Confirm Logout</Text>
            <Text style={styles.textCenter}>Are you sure you want to logout?</Text>

            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.dangerButton]}
                onPress={confirmLogout}
              >
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Success Message Modal */}
      <Modal transparent animationType="fade" visible={successVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.heading}>Logout Successful</Text>
          </View>
        </View>
      </Modal>
      {/* Bottom Navigation */}
      <BottomNavigation currentTab="Profile" />
    </View>
  );
};

export default LogoutScreen;
