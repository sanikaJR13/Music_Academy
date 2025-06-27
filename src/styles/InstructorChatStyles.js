// InstructorChatStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  promptContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  prompt: {
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  chatButton: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
  },
  messageList: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  instructor: {
    backgroundColor: '#E5E7EB',
    alignSelf: 'flex-start',
  },
  student: {
    backgroundColor: '#60A5FA',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#1F2937',
    fontSize: 16,
  },
  inputBar: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    borderRadius: 25,
    fontSize: 16,
    color: '#1F2937',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#1E3A8A',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    justifyContent: 'center',
  },
  sendText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // /-------------- Header ---------------
customHeader: {
  backgroundColor: '#1E3A8A',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 12,
  //paddingHorizontal: 16,
  elevation: 4,
  width:"100%",
},

headerTitle: {
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: '600',
},
});

export default styles;
