// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party react components ↓
import {
  // ↓ components ↓
  View,
  StatusBar,
  StyleSheet,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

// ↓ navigation & routes ↓
import * as RNN from '@react-navigation/native';
import MainNavigator from './src/navigation/main.navigation';

// ↓ containers ↓

// ↓ screens ↓

// ↓ components ↓

// ↓ utils ↓
import {PicturesContext} from './src/models/pictures.context';

// ↓ constants ↓

// ---

const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <RNN.NavigationContainer>
        <View style={styles.container}>
          <StatusBar translucent barStyle={'light-content'} />
          <PicturesContext.Provider value={{pictures: []}}>
            <MainNavigator />
          </PicturesContext.Provider>
        </View>
      </RNN.NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
