import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {H3, Pargraph, H2} from '../texts';

import styles from './cartItem.styles';
const Counter = ({count, addItemHandler, removeItemHandler}) => {
  if (!count) {
    return null;
  }
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity onPress={removeItemHandler}>
        <View
          style={[
            styles.counterButton,
            count !== 1 ? null : styles.counterButtonInactive,
          ]}>
          <H2 text={'-'} />
        </View>
      </TouchableOpacity>
      <H3 text={count} />
      <TouchableOpacity onPress={addItemHandler}>
        <View style={styles.counterButton}>
          <H2 text={'+'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
