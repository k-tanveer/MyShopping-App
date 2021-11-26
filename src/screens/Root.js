import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home/Home';
import Details from './Details/Details';
import Cart from './Cart/Cart';
import Billing from './Billing/Billing';


const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Details"
          options={{headerShown: false, drawerItemStyle: {height: 0}}}
          component={Details}
        />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Billing" component={Billing} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Root;
