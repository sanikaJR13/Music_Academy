import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  picker: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
  },
  courseList: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  thumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  desc: {
    fontSize: 14,
    color: '#374151',
    marginVertical: 4,
  },
  labels: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
  },
  badge: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    fontSize: 12,
    color: '#1E3A8A',
  },
  enrollBtn: {
    backgroundColor: '#60A5FA',
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopColor: '#D1D5DB',
    borderTopWidth: 1,
  },
  navItem: {
    fontSize: 24,
  },
  activeNav: {
    color: '#1E3A8A',
  },
});
