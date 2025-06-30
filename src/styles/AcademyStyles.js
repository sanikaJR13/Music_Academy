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

  // 🎞️ Carousel
  carousel: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 12,
  },
  carouselImage: {
    width: width * 0.85,
    height: 325,
    borderRadius: 12,
    marginRight: 12,
    resizeMode: 'cover',
  },

  // 🔍 Search bar
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 16,
    fontSize: 14,
    color: '#111827',
  },

  // 🎚️ Filters
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 8,
  },
  pickerWrapperSmall: {
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  picker: {
    height: 52,
    color: '#1F2937',
  },

  // 🎸 Course Card
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    margin: 8,
    flex: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  courseImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
  },
  courseLevel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 12,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  coursePrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  enrollButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  enrollText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

});

export default styles;
