import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../constants/color';

const Billing = ({navigation}) => {
  const label = ['NO', 'Product Name', 'Quantity', 'Price'];
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          margin: 9,
          height: 600,
          backgroundColor: COLORS.white,
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: COLORS.dark,
          }}>
          Purchase Details
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10,
            borderBottomWidth: 1,
            borderColor: COLORS.violet,
          }}>
          {label.map(lab => (
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
              {lab}
            </Text>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 5,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>1</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            swet tshirt one
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>20</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>09877</Text>
        </View>
        <View style={{}}>
          <Text>Total</Text>
          <Text>$123</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.violet,
            marginBottom: 0,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Pay</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Billing;
