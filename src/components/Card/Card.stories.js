import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-ondevice-knobs';
import Card from './Card';

const cloths = {
  id: 8,
  name: 'swet tshirt eight',
  price: '29.99',
  like: true,
  img: require('../../assets/Images/cloths.jpg'),
  about: 'laorej lsdfhsjf sflasjdfkljs sldjflkasjdf lsklfjasd jkljsdlf ',
};

export const actions = {
  onCardPress: action('onCardPress'),
};

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('default', () => <Card {...actions} cloths={cloths} />);
