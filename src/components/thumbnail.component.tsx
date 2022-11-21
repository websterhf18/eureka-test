// ↓ beloved react ↓
import React, {useEffect, useState} from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  StyleSheet,
  TouchableOpacity,
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

// ↓ fragments ↓

// ↓ utils ↓

// ↓ constants ↓

// ↓ assets ↓

// ---

const ThumbnailComponent = ({item, onPress}: any) => {
  return (
    <View style={styles.containerThumb}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <FastImage
          style={styles.previewImage}
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: `file://${item.item.path}`}}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerThumb: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'black',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  button: {
    width: '100%',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});
export default ThumbnailComponent;
