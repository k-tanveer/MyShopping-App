import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import COLORS from '../../constants/color';
import ShoppingCart from '../../components/ShoppingCart.js/ShoppingCart';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
        <ShoppingCart />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Billing')}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.violet,
            marginBottom: 2,
          }}>
          <Text style={{fontSize: 26, fontWeight: 'bold'}}>checkout</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
