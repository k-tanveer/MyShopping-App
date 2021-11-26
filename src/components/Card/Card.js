import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../constants/color';

const width = Dimensions.get('screen').width / 2 - 30;

const Card = ({item, onCardPress}) => {
  return (
    <TouchableOpacity onPress={onCardPress}>
      <View style={styles.card}>
        <View style={{height: 100, alignItems: 'center'}}>
          <Image
            style={{flex: 1, resizeMode: 'contain', zIndex: -13}}
            source={item.img}
          />
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginTop: 10}}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>{item.price}</Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.violet,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  card: {
    height: 200,
    width,
    backgroundColor: COLORS.white,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
};

export default Card;
