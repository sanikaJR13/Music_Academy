// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   bottomBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E7EB',
//   },
// });

// export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});

export default styles;
