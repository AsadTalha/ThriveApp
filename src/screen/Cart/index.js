import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {H2} from '../../component/texts';
import BackHover from '../../component/buttons/backHover';
import PrimaryButton from '../../component/buttons/primary';
import {addItem, removeItem, stateCartMemo} from '../../store/features/cart';
import CartItem from '../../component/cartItem';
import styles from './Cart.styles';

const Cart = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartData = useSelector(stateCartMemo);

  const addItemHandler = data => {
    dispatch(addItem(data));
  };

  const removeItemHandler = data => {
    dispatch(removeItem(data));
  };

  const restrauntData = props.route.params.restrauntData;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackHover dark={true} onPress={() => navigation.goBack()} />
          <H2 passedStyles={styles.title} text="My Cart" />
          <View style={{width: 50}} />
        </View>
        <View style={styles.cartBody}>
          <H2 style={{color: '#101010'}} text={restrauntData.name} />
          {Object.values(cartData.data).map(element => {
            return (
              <View key={element.name}>
                <CartItem
                  data={element}
                  addItemHandler={addItemHandler}
                  removeItemHandler={removeItemHandler}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.margin} />
      </ScrollView>
      <View style={styles.primaryBtn}>
        <PrimaryButton
          passedStyles={{backgroundColor: '#89f58b'}}
          text={'Proceed to Checkout'}
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
