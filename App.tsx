import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import 'react-native-gesture-handler';
// import { BasicSidebarNavigator } from './src/navigator/BasicSidebarNavigator';
import { SidebarNavigator } from './src/navigator/SidebarNavigator';
import { AuthProvider } from './src/context/AuthContext';
// import { TabsNavigator } from './src/navigator/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicSidebarNavigator /> */}
        <SidebarNavigator />
        {/* <TabsNavigator /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: { children: JSX.Element }) => {

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


export default App;