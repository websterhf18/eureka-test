// ↓ beloved react ↓
import React, {useEffect} from 'react';

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
import {MainRoutes} from '../navigation/routes';

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

const SplashScreen = ({navigation}: any): React.ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(MainRoutes.Main);
    }, 1500);
  }, []);

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
