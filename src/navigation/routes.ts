import {createStackNavigator} from '@react-navigation/stack';

export enum MainRoutes {
  Splash = 'Splash',
  Main = 'Main',
  Picture = 'Picture',
  Camera = 'Camera',
}

export const MainStack = createStackNavigator();
