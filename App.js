import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import DrawerNavigation from "./src/navigation/drawer";
import ContextProvider from './src/context-api/context';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor='#fff' barStyle="dark-content" />
      <ContextProvider>
        <DrawerNavigation />
      </ContextProvider>
    </View>
  );
}


