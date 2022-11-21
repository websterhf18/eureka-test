// ↓ beloved react ↓
import React, {useEffect, useState} from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
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
import ThumbnailComponent from '../components/thumbnail.component';

// ↓ fragments ↓

// ↓ utils ↓
import {createTable, getAllPictures} from '../models/pictures.database';

// ↓ constants ↓

// ↓ assets ↓

// ---

const MainScreen = ({navigation}: any): React.ReactElement => {
  const [pictures, setPictures] = useState([]);
  const goToCamera = () => {
    navigation.navigate(MainRoutes.Camera);
  };
  const goToPicture = ({item}: any) => {
    navigation.navigate(MainRoutes.Picture, {
      path: item?.path,
      latitude: item?.latitude,
      longitude: item?.longitude,
    });
  };
  const getLastPictures = async () => {
    await createTable();
    const listPictures = await getAllPictures();
    setPictures(listPictures);
  };
  useEffect(() => {
    getLastPictures();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Main" />
      <View style={styles.containerGrid}>
        <FlatList
          data={pictures}
          numColumns={3}
          renderItem={item => (
            <ThumbnailComponent item={item} onPress={() => goToPicture(item)} />
          )}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={goToCamera} style={styles.button}>
          <Text style={styles.buttonText}>Take Picture</Text>
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
  containerGrid: {
    flex: 4,
    height: '100%',
    marginHorizontal: 'auto',
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
