import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../constants/color';

const CategoryList = () => {
  const categories = ['PANTS', 'SHIRTS', 'T-SHIRT', 'JEANS'];
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <View style={styles.categoryContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={index}
          onPress={() => setCategoryIndex(index)}>
          <Text
            style={[
              styles.categoryText,
              categoryIndex == index && styles.categoryTextSelected,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: COLORS.dark,
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: COLORS.violet,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.violet,
  },
});

export default CategoryList;
