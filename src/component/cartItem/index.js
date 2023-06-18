import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {H3, Pargraph, Legend} from '../texts';
import Counter from './counter';

import styles from './cartItem.styles';
const CartItem = ({data, addItemHandler, removeItemHandler}) => {
  const _addItemHandler = () => {
    addItemHandler(data);
  };
  const _removeItemHandler = () => {
    removeItemHandler({itemId: data.id, removeAll: false});
  };
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          style={styles.images}
          source={data.image ? {uri: data.image} : data.localImage}
          alt="No image"
        />
      </View>
      <View style={styles.textContainer}>
        <H3 text={data.name} />
        <Pargraph text={`${data.category}`} />
        <View style={styles.priceContainer}>
          <H3
            passedStyles={{opacity: 0.6}}
            text={`₹${data.cartCount * data.price}`}
          />
          <Counter
            count={data.cartCount}
            addItemHandler={_addItemHandler}
            removeItemHandler={_removeItemHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
