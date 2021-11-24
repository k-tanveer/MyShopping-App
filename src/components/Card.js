import React from 'react';
import {
  View,
  Text,
  //  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import COLORS from '../constants/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width / 2 - 30;

const Card = ({cloths, onCardPress}) => {
  // const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => onCardPress("presiing")}>
      <View style={styles.card}>
        <View style={{height: 100, alignItems: 'center'}}>
          <Image
            style={{flex: 1, resizeMode: 'contain', zIndex: -13}}
            source={cloths.img}
          />
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginTop: 10}}>
          {cloths.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>{cloths.price}</Text>
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
