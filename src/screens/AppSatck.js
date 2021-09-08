import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen';
import EMOMScreen from './EMOMScreen';
import AMRAPScreen from './AMRAPScreen';
import ISOMETRIAScreen from './ISOMETRIAScreen';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#15122B' },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'HomeScreen',
          }}
        />
        <Stack.Screen
          name="EMOM"
          component={EMOMScreen}
          options={{
            title: 'EMOMScreen',
          }}
        />
        <Stack.Screen
          name="AMRAP"
          component={AMRAPScreen}
          options={{
            title: 'AMRAPScreen',
          }}
        />
        <Stack.Screen
          name="ISOMETRIA"
          component={ISOMETRIAScreen}
          options={{
            title: 'ISOMETRIAScreen',
          }}
        />
        
      </Stack.Navigator>
     
    );
}



function AppSatck() {
return(
    <NavigationContainer>
     <Stacks />
    </NavigationContainer>
    )
}
export default AppSatck