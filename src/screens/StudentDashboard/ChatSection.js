import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/InstructorChatStyles';
import BottomNavigation from '../../components/BottomNavigation';

const ChatSection = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello, how can I help you?', sender: 'instructor' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, sender: 'student' }]);
      setInput('');
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'instructor' ? styles.instructor : styles.student,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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

      {!showChat ? (
        <View style={styles.promptContainer}>
          <Text style={styles.prompt}>Want to chat with your instructor?</Text>
          <TouchableOpacity style={styles.chatButton} onPress={() => setShowChat(true)}>
            <Text style={styles.chatButtonText}>Chat Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <KeyboardAvoidingView
          style={styles.chatContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messageList}
          />
          <View style={styles.inputBar}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Type a message..."
              placeholderTextColor="#6B7280"
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default ChatSection;