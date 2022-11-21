// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓

// ↓ models & types ↓

// ↓ navigation ↓
import {MainStack, MainRoutes} from './routes';

// ↓ screens ↓
import SplashScreen from '../screens/splash.screen';
import CameraScreen from '../screens/camera.screen';
import MainScreen from '../screens/main.screen';
import PictureScreen from '../screens/picture.screen';

// ↓ modals ↓

// ↓ forms ↓

// ↓ components ↓

// ↓ fragments ↓

// ↓ utils ↓

// ↓ constants ↓

// ↓ assets ↓

// ---

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator
      initialRouteName={MainRoutes.Picture}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name={MainRoutes.Splash} component={SplashScreen} />
      <MainStack.Screen name={MainRoutes.Main} component={MainScreen} />
      <MainStack.Screen name={MainRoutes.Picture} component={PictureScreen} />
      <MainStack.Screen name={MainRoutes.Camera} component={CameraScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
