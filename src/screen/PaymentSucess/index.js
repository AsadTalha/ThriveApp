import React, {useState} from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {H1, Legend} from '../../component/texts';
import PrimaryButton from '../../component/buttons/primary';
import {stateCartMemo, clearCart} from '../../store/features/cart';
import styles from './Payment.style';

const PaymentSucess = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartData = useSelector(stateCartMemo);
  const skuData = props.route.params;

  const [showJson, setJson] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 60}} />
      {showJson ? (
        <>
          <Legend text={JSON.stringify(skuData)} />
        </>
      ) : (
        <>
          <H1 text="Yum!" />
          <H1 text="Your order is in works." />
          <View style={styles.legend}>
            <Legend
              passedStyles={{textAlign: 'center'}}
              text="We'll keep you updated every step of the way so you know exactly when to expect your meal."
            />
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('../../../assets/payment.png')}
            />
          </View>
        </>
      )}

      <View style={styles.primaryBtnContainer}>
        <View style={styles.primaryBtn}>
          <PrimaryButton
            onPress={() => {
              dispatch(clearCart());
              navigation.navigate('Dashboard');
            }}
            text="Go to Dashboard"
          />
        </View>
        <View style={styles.primaryBtn}>
          <PrimaryButton
            onPress={() => setJson(!showJson)}
            text={showJson ? 'Hide JSON' : 'Show JSON'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSucess;
