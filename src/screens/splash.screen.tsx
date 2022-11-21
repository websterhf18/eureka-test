// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  Text,
  StyleSheet,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';

// ↓ models & types ↓

// ↓ navigation ↓

// ↓ screens ↓

// ↓ modals ↓

// ↓ forms ↓

// ↓ components ↓

// ↓ fragments ↓

// ↓ utils ↓

// ↓ constants ↓

// ↓ assets ↓

// ---

const SplashScreen = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <Text style={styles.text}>Awesome App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
export default SplashScreen;
