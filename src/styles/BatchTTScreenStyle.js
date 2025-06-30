import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  customHeader: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#1E3A8A',
  },
  pickerWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 5,
    marginHorizontal: 4,
    width: 130,
    flex: 1,
    overflow: 'hidden',
  },

  pickerStyle: {
    height: 54,
    color: '#1F2937',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 3,
    padding: 16,
    alignItems: 'center',
    marginVertical: 10,
    width: width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  courseLevel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  courseDescription: {
    fontSize: 13,
    color: '#6B7280',
  },
  courseDate: {
    fontSize: 14,
    color: '#1E3A8A',
    marginTop: 6,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#9CA3AF',
  },
});

export default styles;
