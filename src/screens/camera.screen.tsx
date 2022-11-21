// ↓ beloved react ↓
import React, {useEffect, useRef, useState} from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';

import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Geolocation from '@react-native-community/geolocation';

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

const CameraScreen = ({navigation}: any): React.ReactElement => {
  //Hooks
  const camera = useRef<Camera>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [position, setPosition] = useState<string | null>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  //Get permissions to camera
  const checkCameraPermission = async () => {
    let status = await Camera.getCameraPermissionStatus();
    if (status !== 'authorized') {
      await Camera.requestCameraPermission();
      status = await Camera.getCameraPermissionStatus();
      setHasPermission(status === 'authorized');
      if (status === 'denied') {
        setHasPermission(status === 'denied');
      }
    }
    setHasPermission(status === 'authorized');
  };
  //Get permissions to Gps
  const checkGpsPermission = async () => {
    Geolocation.requestAuthorization();
  };

  //Get Gps Data
  const getCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(JSON.stringify(pos));
      },
      error => console.log(error),
      {enableHighAccuracy: true},
    );
  };

  //Take photo and send photo
  const takePhotoCamera = async () => {
    const photo = await camera?.current?.takePhoto({
      flash: 'off',
    });
    await getCurrentPosition();
    navigation.navigate(MainRoutes.Picture, {
      path: photo?.path,
      gps: position,
    });
  };
  useEffect(() => {
    checkCameraPermission();
    checkGpsPermission();
  }, []);

  if (device == null)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Header title="Camera" />
      <Camera
        ref={camera}
        style={styles.preview}
        device={device}
        isActive={true}
        photo={true}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={takePhotoCamera} style={styles.button}>
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 20,
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
export default CameraScreen;
