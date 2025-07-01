import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
    padding: 16,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 80,
  },
  profileImageContainer: {
    position: 'relative',
    marginVertical: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#1E3A8A',
    padding: 6,
    borderRadius: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  role: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    color: '#1F2937',
  },
  optionsContainer: {
    width: '100%',
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#1F2937',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  saveText: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#60A5FA',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: '#1E3A8A',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  signOutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsView: {
    width: '100%',
    marginBottom: 20,
  },
});

export default styles;
