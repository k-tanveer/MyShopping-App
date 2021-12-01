import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../constants/color';

const cloths = {
  id: 8,
  name: 'swet tshirt eight',
  price: '29.99',
  like: true,
  img: require('../../assets/Images/cloths.jpg'),
  about: 'laorej lsdfhsjf sflasjdfkljs sldjflkasjdf lsklfjasd jkljsdlf ',
};

const ShoppingCart = ({navigation}) => {
  return (
    <View
      style={{
        margin: 5,
        borderWidth: 1,
        borderColor: COLORS.violet,
        borderRadius: 15,
        height: 150,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Image
          source={cloths.img}
          style={{
            width: 120,
            height: 120,
            borderWidth: 1,
            // borderColor: 'red',
            borderRadius: 15,
          }}
        />
        <View>
          <Text style={styles.cartText}>name sdfasd</Text>
          <Text style={styles.cartText}>quantity: 12</Text>
          <Text style={styles.cartText}>price: $234</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              name="shopping-basket-remove"
              size={35}
              style={{color: COLORS.violet}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.dark,
    paddingBottom: 5,
    paddingHorizontal: 7,
  },
};

export default ShoppingCart;
