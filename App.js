import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/store';
import Dashboard from './src/screen/Dashboard';
import Restaurant from './src/screen/Restaurant';
import Dish from './src/screen/Dish';
import Cart from './src/screen/Cart';
import Checkout from './src/screen/Checkout';
import PaymentSucess from './src/screen/PaymentSucess';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Restaurant"
            component={Restaurant}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dish"
            component={Dish}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentSucess"
            component={PaymentSucess}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
