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
import FastImage from 'react-native-fast-image';

// ↓ models & types ↓

// ↓ navigation ↓

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

const PictureScreen = ({route, navigation}: any): React.ReactElement => {
  const {path, gps} = route.params;
  return (
    <View style={styles.container}>
      <Header title="Picture" />
      <View style={styles.preview}>
        <FastImage
          style={styles.previewImage}
          resizeMode={FastImage.resizeMode.contain}
          source={path}
        />
      </View>
      <View style={styles.containerText}>
        <Text>{`Gps Coordinates: ${gps}`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 20,
  },
  containerText: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
  },
});
export default PictureScreen;
