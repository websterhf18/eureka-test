// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';

// ↓ models & types ↓

// ↓ navigation ↓
import {MainRoutes} from '../navigation/routes';

// ↓ screens ↓

// ↓ modals ↓

// ↓ forms ↓

// ↓ components ↓
import Header from '../components/header.component';

// ↓ fragments ↓

// ↓ utils ↓

// ↓ constants ↓

// ↓ assets ↓

// ---

const MainScreen = ({navigation}: any): React.ReactElement => {
  const goToCamera = () => {
    navigation.navigate(MainRoutes.Camera);
  };
  return (
    <View>
      <Header title="Main" />
      <View style={styles.containerGrid}></View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={goToCamera} style={styles.button}>
          <Text style={styles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerGrid: {
    flex: 1,
  },
  containerButton: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    elevation: 8,
    backgroundColor: '#17a2b8',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  },
});
export default MainScreen;
