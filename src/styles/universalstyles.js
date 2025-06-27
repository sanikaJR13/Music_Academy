import { StyleSheet } from 'react-native';

// 🎨 Color Theme Constants
const COLORS = {
  primary: '#1E3A8A',        // Deep Indigo
  secondary: '#60A5FA',      // Sky Blue
  accent: '#FACC15',         // Golden Yellow
  white: '#FFFFFF',
  lightGray: '#F3F4F6',
  darkGray: '#1F2937',
  slateGray: '#6B7280',
};
// ------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
    backgroundColor: COLORS.white,
  },
 
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    //borderWidth: 1,
    borderColor: COLORS.slateGray,
    backgroundColor: COLORS.lightGray,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: COLORS.darkGray,
  },
  roleLabel: {
    fontSize: 16,
    marginVertical: 10,
    color: COLORS.darkGray,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 20,
  },
  roleButton: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginHorizontal: 5,
  },

  roleUnselected: {
  backgroundColor: COLORS.slateGray,
  },

  roleSelected: {
  backgroundColor: COLORS.secondary, 
  },

  roleText: {
  color: COLORS.white,
  fontWeight: 'bold',
  textAlign: 'center',
  },

  linkContainer: {
  marginTop: 30,
  alignItems: 'center',
  },

  linkText: {
  color: '#6B7280', 
  fontSize: 14,
  },

  linkAction: {
  color: '#1E3A8A', 
  fontWeight: 'bold',
  },

  forgotPassword: {
  alignSelf: 'flex-end',
  marginBottom: 10,
  marginTop: -5,
  marginLeft: 5,
  color: '#1E3A8A', 
  fontWeight: 'bold',
  },

  inputWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F3F4F6',
  borderRadius: 8,
  paddingHorizontal: 10,
  paddingVertical: 8,
  marginBottom: 10,
  borderColor: '#6B7280',
  borderWidth: 1,
  },

  inputIcon: {
  marginRight: 8,
  },

  loginButton: {
  backgroundColor: '#1E3A8A',
  paddingVertical: 12,
  borderRadius: 8,
  marginTop: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 5,
  },

  loginButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  textAlign: 'center',
  },
  // -------------------------------------------------------------------

 // Login page background 
// background: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// },

// overlay: {
//   flex: 1,
//   backgroundColor: 'rgba(200,200,200)', // optional white tint over image
//   width: '100%',
//   paddingHorizontal: 20,
//   justifyContent: 'center',
// },

  
  // Add these at the end of the styles object or merge logically
splashContainer: {
  flex: 1,
  backgroundColor: COLORS.white,
  justifyContent: 'center',
  alignItems: 'center',
},
splashLogo: {
  width: 250,
  height: 250,
  resizeMode: 'contain',
  marginBottom: 20,
  marginTop:50,
},
splashTagline: {
  fontSize: 18,
  fontWeight: '600',
  color: COLORS.darkGray,
},
splashNote: {
  fontSize: 30,
  marginTop: 20,
},
// ---------------------------------------------------------------------------
// Feature screen ----------------------------------------------------------
featureContainer: {
  flex: 1,
  backgroundColor: COLORS.white,
  justifyContent: 'center',
  alignItems: 'center',
},

featureSlide: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 30,
},

featureTitle: {
  fontSize: 26,
  fontWeight: 'bold',
  color: COLORS.primary,
  textAlign: 'center',
  marginBottom: 10,
},

featureDescription: {
  fontSize: 16,
  color: COLORS.darkGray,
  textAlign: 'center',
  marginBottom: 20,
},

featureImage: {
  width: 350,
  height: 400,
  resizeMode: 'contain',
  marginBottom: 20,
  marginTop: 40,
},

featureNavigation: {
  position: 'absolute',
  bottom: 30,
  width: '100%',
  paddingHorizontal: 30,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

featureSkipText: {
  fontSize: 16,
  color: COLORS.primary,
  fontWeight: '500',
},

featureNextText: {
  fontSize: 16,
  color: COLORS.primary,
  fontWeight: '500',
},

featureStartBtn: {
  marginTop: 30,
  backgroundColor: COLORS.primary,
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 25,
},

featureStartBtnText: {
  color: COLORS.white,
  fontSize: 16,
  fontWeight: 'bold',
},
//-----------------------------
// Registration page 
formGroup: {
  marginBottom: 16,
},

label: {
  fontSize: 14,
  color: '#1F2937',
  marginBottom: 4,
  fontWeight: '600',
},

dropdown: {
  borderColor: '#6B7280',
  borderRadius: 8,
  marginTop: 4,
},

dropdownContainer: {
  borderColor: '#6B7280',
  borderRadius: 8,
},
// scrollContainer: {
//   paddingBottom: 40,
// },
 rcontainer:{
    padding: 20,
    backgroundColor: COLORS.white,

  },
  dropdownHigh: {
  zIndex: 3000,
},
dropdownMid: {
  zIndex: 2000,
},
dropdownLow: {
  zIndex: 1000,
},


// ----------------------------------------
// ForgotPasswordScreen
formGroup: {
  marginBottom: 16,
},

label: {
  fontSize: 14,
  color: '#1F2937',
  marginBottom: 4,
  fontWeight: '600',
},
fcontainer: {
  flex: 1,
  justifyContent: 'center', // vertical center
  padding: 20,
  backgroundColor: COLORS.white,
},
// --------------------------------------------
// StudentDashboard
StudentDashboardcontainer:{
  flex: 1,
  justifyContent: 'center', // vertical center
  paddingLeft:1,
  paddingRight:2,
  paddingHorizontal: 1,
  paddingVertical:0,
  //marginTop:20,
  backgroundColor: COLORS.white,
},
StudentDashboardUpdatedcontainer :{
  justifyContent: 'center', // vertical center
  padding: 20,
  backgroundColor: COLORS.white,

},
centeredDashboardGrid: {
  justifyContent: 'center',
  alignItems: 'center',
 
  gap: 20,
},
dashboardCard: {
  backgroundColor: '#E5E7EB',
  borderRadius: 12,
  width: 140,
  height: 120,
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
},

dashboardCardText: {
  marginTop: 4,
  fontSize: 16,
  fontWeight: '600',
  color: '#1E3A8A',
},

dashboardTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginVertical: 20,
  color: '#1E3A8A',
  textAlign: 'center',
},

dashboardGrid: {
  paddingBottom: 80,
  alignItems: 'center',
},

dashboardCard: {
  width: 140,
  height: 120,
  margin: 10,
  borderRadius: 12,
  backgroundColor: '#F3F4F6',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 4,
},

dashboardCardText: {
  marginTop: 10,
  fontSize: 14,
  fontWeight: '600',
  color: '#1F2937',
  textAlign: 'center',
},

bottomBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  paddingVertical: 12,
  borderTopWidth: 2,
  borderTopColor: '#E5E7EB',
  position: 'absolute',
  bottom: 0,
  width: '100%',
},

// -----------------------------------------------------
// CoursesScreen.js
// filterInput: {
//   flex: 0.48,
//   borderWidth: 1,
//   borderColor: '#6B7280',
//   borderRadius: 8,
//   paddingHorizontal: 10,
//   paddingVertical: 8,
//   backgroundColor: '#F3F4F6',
//   color: '#1F2937',
// },

// courseCard: {
//   flexDirection: 'row',
//   backgroundColor: '#FFFFFF',
//   borderRadius: 10,
//   marginVertical: 8,
//   overflow: 'hidden',
//   elevation: 3,
//   shadowColor: '#000',
//   shadowOpacity: 0.1,
//   shadowOffset: { width: 0, height: 2 },
//   shadowRadius: 4,
// },

// courseImage: {
//   width: 100,
//   height: 100,
// },

// courseInfo: {
//   flex: 1,
//   padding: 10,
// },

// courseTitle: {
//   fontSize: 16,
//   fontWeight: 'bold',
//   color: '#1E3A8A',
// },

// courseDescription: {
//   fontSize: 13,
//   color: '#374151',
//   marginVertical: 4,
// },

// enrollButton: {
//   backgroundColor: '#60A5FA',
//   paddingVertical: 6,
//   paddingHorizontal: 12,
//   borderRadius: 6,
//   alignSelf: 'flex-start',
// },

// enrollText: {
//   color: '#FFFFFF',
//   fontWeight: 'bold',
// },
// carousel: {
//   height: 160,
//   marginBottom: 10,
//   paddingTop:10,
// },

// carouselImage: {
//   width: '100%',
//   height: 260,
//   borderRadius: 12,
//   marginRight: 10,
// },
// courseCard: {
//   flex: 1,
//   backgroundColor: '#F9FAFB',
//   margin: 6,
//   borderRadius: 10,
//   padding: 8,
//   alignItems: 'center',
// },
// courseImage: {
//   width: '100%',
//   height: 100,
//   borderRadius: 8,
// },
// bottomNav: {
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   right: 0,
//   height: 60,
//   backgroundColor: COLORS.white,
//   borderTopColor: '#D1D5DB',
//   borderTopWidth: 1,
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   alignItems: 'center',
// },
// navItem: {
//   fontSize: 24,
//   color: COLORS.slateGray,
// },
// activeNav: {
//   color: COLORS.primary,
// },
// carouselImage: {
//   width: 280,
//   height: 140,
//   borderRadius: 12,
//   marginRight: 10,
// },
// courseLevel: {
//   fontSize: 14,
//   fontWeight: '600',
//   color: '#6B7280',
//   marginBottom: 2,
// },

// coursePrice: {
//   fontSize: 15,
//   fontWeight: 'bold',
//   color: '#1E3A8A',
//   marginVertical: 4,
// },
// scrollContainer: {
//   paddingBottom: 100,
  
// },

// courseGrid: {
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
// },

// filterRow: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   gap: 10,
//   marginBottom: 10,
// },

// pickerWrapperSmall: {
//   flex: 1,
//   backgroundColor: COLORS.lightGray,
//   borderColor: COLORS.slateGray,
//   borderWidth: 1,
//   borderRadius: 8,
//   overflow: 'hidden',
//   height: 42,
//   justifyContent: 'center',
// },

// picker: {
//   color: COLORS.darkGray,
//   fontSize: 14,
//   height: 40,
//   paddingHorizontal: 8,
//   marginTop: -2, 
// },
// pickerItem: {
//   fontSize: 14,
//   height: 20,
//   color: '#ffffff',
//   fontFamily: 'System',
// },
// welcomeText: {
//   fontSize: 20,
//   fontWeight: 'bold',
//   color: '#1E3A8A', // Deep Indigo
//   marginBottom: 10,
//   textAlign: 'center',
// },



//  scrollContainer: {
//     paddingBottom: 100,
//     paddingHorizontal: 10,
//     backgroundColor: '#FFFFFF',
//   },

//   customHeader: {
//     backgroundColor: '#1E3A8A',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     elevation: 4,
//     width: '100%',
//   },

//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },

//   carousel: {
//     height: 160,
//     marginBottom: 10,
//     paddingTop: 10,
//   },

//   carouselImage: {
//     width: 280,
//     height: 140,
//     borderRadius: 12,
//     marginRight: 10,
//   },

//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginVertical: 10,
//     color: '#111827',
//     backgroundColor: '#F3F4F6',
//   },

//   filterRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     gap: 10,
//   },

//   pickerWrapperSmall: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//     borderColor: '#6B7280',
//     borderWidth: 1,
//     borderRadius: 8,
//     overflow: 'hidden',
//     height: 42,
//     justifyContent: 'center',
//   },

//   picker: {
//     color: '#374151',
//     fontSize: 14,
//     height: 40,
//     paddingHorizontal: 8,
//     marginTop: -2,
//   },

//   courseCard: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     margin: 6,
//     borderRadius: 10,
//     padding: 8,
//     alignItems: 'center',
//     maxWidth: '47%', // for 2 columns
//   },

//   courseImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 8,
//     resizeMode: 'contain',
//   },

//   courseTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#1E3A8A',
//     marginTop: 6,
//   },

//   courseLevel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#6B7280',
//     marginBottom: 2,
//   },

//   courseDescription: {
//     fontSize: 13,
//     color: '#374151',
//     marginVertical: 4,
//     textAlign: 'center',
//   },

//   coursePrice: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#1E3A8A',
//     marginVertical: 4,
//   },

//   enrollButton: {
//     backgroundColor: '#1E3A8A',
//     paddingVertical: 6,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     marginTop: 4,
//   },

//   enrollText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },

//   bottomNav: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 60,
//     backgroundColor: '#FFFFFF',
//     borderTopColor: '#D1D5DB',
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },

//   navItem: {
//     fontSize: 24,
//     color: '#6B7280',
//   },

//   activeNav: {
//     color: '#1E3A8A',
//   },

//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1E3A8A',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//  filter ---
  horizontalFilters: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 10,
  paddingHorizontal: 10,
  gap: 10,
},

horizontalPickerWrapper: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 8,
  overflow: 'hidden',
  backgroundColor: '#fff',
  height: 42,
  justifyContent: 'center',
},

horizontalPicker: {
  color: '#000', // Black text
  fontSize: 14,
  height: 42,
  paddingHorizontal: 8,
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
// ------------------ Course Detail Screen ------------------

detailContainer: {
  flex: 1,
  backgroundColor: COLORS.white,
  paddingBottom: 20,
},
detailCenterContainer:{
  backgroundColor: COLORS.white,
  paddingBottom: 20,
  paddingHorizontal: 20,

},

courseTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#1E3A8A',
  textAlign: 'center',
  marginBottom: 12,
},
aboutPriceRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  marginBottom: 8,
},
aboutLabel: {
  fontSize: 16,
  fontWeight: '600',
  color: '#1F2937',
},
priceLabel: {
  fontSize: 16,
  fontWeight: 'bold',
  backgroundColor: '#FACC15',
  paddingHorizontal: 10,
  paddingVertical: 2,
  borderRadius: 12,
  color: '#1F2937',
},

detailHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: COLORS.primary,
  paddingVertical: 14,
  paddingHorizontal: 16,
  elevation: 4,
},

detailHeaderTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: COLORS.white,
},

detailImage: {
  width: '100%',
  height: 200,
  resizeMode: 'cover',
  borderRadius:25,
  // borderBottomLeftRadius: 12,
  // borderBottomRightRadius: 12,
  marginBottom: 20,
  alignItems: 'center',
  marginTop:40,
  justifyContent:'center',
  padding:20,
  paddingHorizontal:30,
},

detailDescription: {
  fontSize: 16,
  color: COLORS.darkGray,
  paddingHorizontal: 16,
  marginBottom: 20,
},

detailFooter: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
},

detailPrice: {
  fontSize: 18,
  fontWeight: 'bold',
  color: COLORS.primary,
},

detailEnrollBtn: {
  backgroundColor: COLORS.secondary,
  paddingVertical: 10,
  paddingHorizontal: 120,
  borderRadius: 8,
},

detailEnrollText: {
  color: COLORS.white,
  fontWeight: 'bold',
  fontSize: 16,
},

// ------------------------- Logout----------
containerCenter: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#FFFFFF',
},
heading: {
  fontSize: 22,
  marginBottom: 20,
  color: '#1E3A8A',
  fontWeight: 'bold',
},
dangerButton: {
  backgroundColor: '#EF4444',
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 10,
},
buttonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
},
// ------------------------------------- Chat Section 

messageBubble: {
  marginVertical: 5,
  padding: 10,
  borderRadius: 10,
  maxWidth: '75%'
},
myMessage: {
  backgroundColor: '#DCF8C6',
  alignSelf: 'flex-end'
},
otherMessage: {
  backgroundColor: '#E5E7EB',
  alignSelf: 'flex-start'
},
messageText: {
  fontSize: 16,
  color: '#111827'
},
inputContainer: {
  flexDirection: 'row',
  padding: 10,
  borderTopWidth: 1,
  borderColor: '#ccc',
  backgroundColor: '#fff'
},
textInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 20,
  paddingHorizontal: 15,
  height: 40
},
sendButton: {
  marginLeft: 10,
  backgroundColor: '#1E3A8A',
  borderRadius: 20,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center'
},
chatList: {
  padding: 10
},

//  updated logout scree ----------------------
modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.4)',
},

modalBox: {
  width: '80%',
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
  elevation: 10,
},

textCenter: {
  fontSize: 16,
  color: '#374151',
  textAlign: 'center',
  marginVertical: 10,
},

modalButtonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
  width: '100%',
},

modalButton: {
  flex: 1,
  paddingVertical: 10,
  marginHorizontal: 5,
  borderRadius: 8,
  alignItems: 'center',
},

cancelButton: {
  backgroundColor: '#9CA3AF', // gray
},

dangerButton: {
  backgroundColor: '#EF4444', // red
},
// -------------Profile Screen Student 
profileContainer: {
  backgroundColor: '#FFFFFF',
  padding: 20,
  borderRadius: 10,
  marginVertical: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
},
profileLabel: {
  fontWeight: 'bold',
  fontSize: 16,
  color: '#1E3A8A',
  marginTop: 10,
},
profileValue: {
  fontSize: 16,
  color: '#111827',
},


// Optional styling for titles inside the payment/success step
paymentTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#10B981', // green for success or trust
  textAlign: 'center',
  marginBottom: 12,
},

paymentDescription: {
  fontSize: 16,
  color: '#374151',
  textAlign: 'center',
  paddingHorizontal: 20,
  marginBottom: 20,
},

successTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#22C55E', // bright green for success
  textAlign: 'center',
  marginBottom: 12,
},

successDescription: {
  fontSize: 16,
  color: '#1F2937',
  textAlign: 'center',
  paddingHorizontal: 20,
  marginBottom: 20,
},

successIcon: {
  fontSize: 48,
  color: '#22C55E',
  textAlign: 'center',
  marginVertical: 20,
},
PaymentandENrollment:{
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center', 
  paddingVertical:230,

},
// -------- Profile Screen ----------
profileContainer: {
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 30,
  paddingBottom: 100, // Space for bottom nav
  backgroundColor: '#F9FAFB',
},

avatarWrapper: {
  position: 'relative',
  marginBottom: 20,
},

avatar: {
  width: 110,
  height: 110,
  borderRadius: 55,
  backgroundColor: '#E5E7EB',
},

editIcon: {
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: '#FACC15',
  borderRadius: 12,
  padding: 6,
  borderWidth: 1,
  borderColor: '#FFFFFF',
},

inputField: {
  width: '80%',
  borderWidth: 1,
  borderColor: '#CBD5E1',
  borderRadius: 8,
  padding: 10,
  marginVertical: 6,
  backgroundColor: '#FFFFFF',
  fontSize: 16,
  color: '#1F2937',
},

saveButton: {
  marginTop: 10,
  backgroundColor: '#1E3A8A',
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 8,
},

saveButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  textAlign: 'center',
},

});

export default styles;
