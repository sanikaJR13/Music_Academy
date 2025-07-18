// src/styles/universalstyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  dashboardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 20,
    textAlign: 'center',
  },
  dashboardGrid: {
    justifyContent: 'space-between',
  },
  dashboardCard: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#E5E7EB',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  dashboardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#1E3A8A',
    fontWeight: '600',
  },
  // --- Header -----------------
  customHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: '#1E3A8A',
  borderRadius: 10,
  marginBottom: 15,
},
headerTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF',
},
customHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: '#1E3A8A',
  borderRadius: 10,
  marginBottom: 15,
},
headerTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#FFFFFF',
},
// ---- Bottom Bar
bottomBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingVertical: 10,
  backgroundColor: '#F3F4F6',
  borderTopWidth: 1,
  borderTopColor: '#E5E7EB',
  marginTop: 10,
  marginBottom:0,
  width:'100%',
},

// ------- AcademyProfile-------
profileContainer: {
  // flex: 1,
  alignItems: 'center',
  paddingVertical: 30,
  paddingHorizontal: 20,
  backgroundColor: '#FFFFFF',
},
academyLogo: {
  width: 1,
  height: 1,
  borderRadius: 50,
  marginBottom: 15,
},
academyName: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#1E3A8A',
  marginBottom: 20,
},
statsBox: {
  backgroundColor: '#E5E7EB',
  padding: 20,
  borderRadius: 12,
  width: '100%',
  marginBottom: 25,
  alignItems: 'center',
},
statsText: {
  fontSize: 16,
  color: '#1F2937',
  marginVertical: 4,
},
sectionHeading: {
  fontSize: 18,
  fontWeight: '600',
  color: '#1E3A8A',
  marginBottom: 10,
  alignSelf: 'flex-start',
},
instrumentList: {
  flexDirection: 'row',
  gap: 10,
},
instrumentTag: {
  backgroundColor: '#FACC15',
  borderRadius: 20,
  paddingHorizontal: 15,
  paddingVertical: 6,
  marginRight: 10,
},
instrumentText: {
  fontSize: 14,
  fontWeight: '500',
  color: '#1F2937',
},
profileContainer: {
  flex: 1,
  backgroundColor: '#F3F4F6',
  padding: 20,
},
profileHeader: {
  alignItems: 'center',
  marginBottom: 30,
},
academyLogo: {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginBottom: 1,
  borderWidth: 2,
  borderColor: '#FACC15',
},
academyName: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#1E3A8A',
  textAlign: 'center',
},
statsRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 25,
},
statCard: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  marginHorizontal: 8,
  paddingVertical: 20,
  borderRadius: 15,
  alignItems: 'center',
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
},
statNumber: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#1E3A8A',
  marginVertical: 5,
},
statLabel: {
  fontSize: 14,
  color: '#6B7280',
},
sectionHeading: {
  fontSize: 18,
  fontWeight: '600',
  color: '#1E3A8A',
  marginBottom: 10,
},
instrumentList: {
  paddingLeft: 4,
},
instrumentTag: {
  backgroundColor: '#FACC15',
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 20,
  marginRight: 10,
},
instrumentText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#1F2937',
},

editButton: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#1E3A8A',
  borderRadius: 20,
  paddingVertical: 6,
  paddingHorizontal: 14,
  marginTop: 10,
  backgroundColor: '#FFFFFF',
},
editButtonText: {
  fontSize: 14,
  color: '#1E3A8A',
  fontWeight: '600',
},

input: {
  width: '100%',
  padding: 12,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  marginBottom: 15,
  borderColor: '#E5E7EB',
  borderWidth: 5,
  fontSize: 16,
  color: '#1F2937',
},
saveButton: {
  backgroundColor: '#1E3A8A',
  padding: 15,
  borderRadius: 10,
  marginTop: 20,
  alignItems: 'center',
},
saveButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
},
// -------------------------------------------
// Batch Time Table ---------------
// -------------------
customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E3A8A',
    padding: 15,
    paddingTop: 50,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
    color: '#1E3A8A',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  pickerWrapper: {
    borderWidth: 15,
    borderColor: '#1F2937',
    borderRadius: 15,
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 5,
    // backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  
  pickerStyle: {
    width: '100%',
    height: 40,
    color: '#1F2937',
  },
  pickerWrapper: {
  borderWidth: 1,
  borderColor: '#1E3A8A',
  borderRadius: 10,
  overflow: 'hidden',
  minWidth: 150,
  marginRight: 10,
},

pickerStyle: {
  height: 40,
  color: '#000',
},

  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  courseImage: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  courseLevel: {
    textAlign: 'center',
    color: '#6B7280',
    fontWeight: '600',
  },
  courseDescription: {
    textAlign: 'center',
    color: '#6B7280',
  },
  coursePrice: {
    textAlign: 'center',
    color: '#1E3A8A',
    fontWeight: '600',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    color: '#9CA3AF',
    marginTop: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles; 