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
});

export default styles; // ✅ Default export to fix 'undefined' error
