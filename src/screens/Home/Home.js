import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../constants/color';
import DB from '../../constants/DB';
import CategoryList from '../../components/CategoryList';
import Card from '../../components/Card/Card';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <View
        style={{
          marginTop: 5,
          height: 50,
          backgroundColor: COLORS.white,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="search" size={25} style={{marginLeft: 20}} />
        <TextInput style={styles.input} placeholder="search" />
      </View>
      <CategoryList />
      <FlatList
        navigation={navigation}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        data={DB}
        renderItem={({item}) => (
          <Card
            onCardPress={() => navigation.navigate('Details', item)}
            item={item}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    flex: 1,
  },
});

export default Home;
