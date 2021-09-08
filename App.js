import React from 'react';
import { StatusBar} from 'react-native';
import AppSatck from './src/screens/AppSatck';

export default function App() {
  return ( 
    <>
    <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
     />
      <AppSatck />
    </>
  );
}
