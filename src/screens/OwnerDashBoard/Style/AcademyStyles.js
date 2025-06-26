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
  fontSize: 18,
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
//  -------Batch TimeTable Screen ----------
// ⬇ Calendar Modal Overlay
calendarModal: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 20,
},

calendarContainer: {
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  elevation: 5,
},

// ⬇ Dropdown Picker Styling
picker: {
  backgroundColor: '#FFFFFF',
  borderColor: '#E5E7EB',
  borderWidth: 1,
  borderRadius: 10,
  marginBottom: 10,
  color: '#1F2937',
  paddingHorizontal: 10,
  height: 50,
},

// ⬇ Batch Card Styling
courseCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  padding: 15,
  marginBottom: 15,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
},

courseImage: {
  width: '100%',
  height: 120,
  borderRadius: 10,
  marginBottom: 10,
  resizeMode: 'cover',
},

courseTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#1E3A8A',
  marginBottom: 4,
},

courseLevel: {
  fontSize: 14,
  color: '#374151',
  marginBottom: 4,
},

courseDescription: {
  fontSize: 14,
  color: '#6B7280',
  marginBottom: 4,
},

coursePrice: {
  fontSize: 14,
  color: '#F59E0B',
  marginBottom: 4,
},


// 🔽 Add this in universalstyles.js

filterContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginBottom: 10,
  marginTop: 10,
  gap: 10,
},

pickerWrapper: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#1E3A8A',
  borderRadius: 10,
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
  height: 42,
  justifyContent: 'center',
  backgroundColor: '#E5E7EB', // lightGray
  borderColor: '#1E3A8A',      // slateBlue border
  marginBottom: 10, 
},

pickerStyle: {
  height: 100,
  width: '100%',
  color: '#1E3A8A',
  fontSize: 14,
  paddingLeft: 8,
    paddingHorizontal: 8,
  marginTop: -2,
  height: 40,
},


});

export default styles; // ✅ Default export to fix 'undefined' error
