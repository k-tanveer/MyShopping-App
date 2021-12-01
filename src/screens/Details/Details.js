import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import COLORS from '../../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Details = ({navigation, route}) => {
  const item = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.light}}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={29} onPress={() => navigation.goBack()} />
        <Icon
          name="shopping-cart"
          size={29}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.img} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={styles.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
        </View>
        <View style={styles.clothNameContainer}>
          <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.name}</Text>
          <View style={styles.priceTagContainer}>
            <Text style={styles.priceTagText}>${item.price}</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
            About
          </Text>
          <Text style={styles.aboutText}>{item.about}</Text>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text style={styles.quantityText}>1</Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 12,
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.white,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  clothNameContainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceTagContainer: {
    backgroundColor: COLORS.violet,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  priceTagText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    color: COLORS.white,
  },
  aboutText: {
    color: COLORS.dark,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 20,
  },
  borderBtn: {
    borderColor: COLORS.violet,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.violet,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
