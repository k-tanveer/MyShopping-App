import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import COLORS from '../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Details = ({navigation, route}) => {
  const cloth = route.params;
  console.log('cloth', cloth);

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
        <Image
          source={cloth.img}
          // style={{resizeMode: 'contain', flex: 1}}
        />
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
          <Text style={{fontWeight: 'bold', fontSize: 22}}>{cloth.name}</Text>
          <View style={styles.priceTagContainer}>
            <Text style={styles.priceTagText}>${cloth.price}</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.dark}}>
            About
          </Text>
          <Text style={styles.aboutText}>{cloth.about}</Text>
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
});

export default Details;
