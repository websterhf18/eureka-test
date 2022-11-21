// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';

import FastImage from 'react-native-fast-image';
import Share from 'react-native-share';

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
  const {path, latitude, longitude} = route.params;
  const onShare = async () => {
    try {
      const urlLocal = `file://${path}`;
      await Share.open({
        urls: [urlLocal],
        title: 'Eureka Share',
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Picture" />
      <View style={styles.preview}>
        <FastImage
          style={styles.previewImage}
          resizeMode={FastImage.resizeMode.contain}
          source={{uri: `file://${path}`}}
        />
      </View>
      <View style={styles.containerText}>
        <Text>{`Gps Latitud: ${latitude}`}</Text>
        <Text>{`Gps Longitud: ${longitude}`}</Text>
        <TouchableOpacity onPress={onShare} style={styles.button}>
          <Text style={styles.buttonText}>Share Picture</Text>
        </TouchableOpacity>
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
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
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
export default PictureScreen;
