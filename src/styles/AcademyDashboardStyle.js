import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  customHeader: {
    backgroundColor: '#1E3A8A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon: {
    padding: 4,
  },
  header: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  editIcon: {
    position: 'absolute',
    top: 75,
    right: 120,
    backgroundColor: '#FACC15',
    borderRadius: 20,
    padding: 4,
  },
  academyName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginTop: 8,
  },
  dashboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginBottom: 16,
  },
  dashboardCard: {
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    width: '28%',
    elevation: 2,
  },
  dashboardText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#1E3A8A',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: '#F8FAFC',
    width: '30%',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginVertical: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
    color: '#1E3A8A',
  },
  instrumentRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 80,
  },
  instrument: {
    alignItems: 'center',
    width: '28%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#1E3A8A',
    borderRadius: 50,
  },
  selectedInstrument: {
    backgroundColor: '#E0E7FF',
  },
  instrumentName: {
    marginTop: 6,
    color: '#1E3A8A',
  },
  courseGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 12,
},
card: {
  width: '47%',
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  padding: 12,
  marginBottom: 16,
  elevation: 3,
  alignItems: 'center',
},
cardImage: {
  width: 80,
  height: 80,
  marginBottom: 12,
},
cardTitle: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#1E3A8A',
},
cardLevel: {
  fontSize: 13,
  color: '#64748B',
  marginVertical: 4,
},
cardPrice: {
  fontSize: 14,
  fontWeight: '600',
  color: '#1E3A8A',
},
cardButton: {
  marginTop: 8,
  backgroundColor: '#1E3A8A',
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 8,
},
cardButtonText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: 'bold',
},

// Add or update these in AcademyDashboardStyle.js

// Student Card Styles
card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  paddingVertical: 12,
  paddingHorizontal: 16,
  marginHorizontal: 16,
  marginBottom: 12,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
},

cardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

name: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#1E3A8A',
},

status: {
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 6,
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: 13,
},

details: {
  marginTop: 10,
  paddingTop: 6,
  borderTopWidth: 1,
  borderTopColor: '#E5E7EB',
  gap: 4,
},

// Optional: Filter Row and Button styles if not already present
filterRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 10,
  gap: 8,
},

filterButton: {
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 20,
  backgroundColor: '#E5E7EB',
},

activeFilter: {
  backgroundColor: '#1E3A8A',
},

filterText: {
  // color: '#1E3A8A',
  fontWeight: 'bold',
},

// Header and Add button row
headerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  marginTop: 10,
},

title: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#1E3A8A',
},

addButton: {
  backgroundColor: '#1E3A8A',
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 8,
},

addButtonText: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: 'bold',
},


});

export default styles;
