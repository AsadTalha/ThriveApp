import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {H2} from '../../component/texts';
import BackHover from '../../component/buttons/backHover';
import PrimaryButton from '../../component/buttons/primary';
import {stateCartMemo} from '../../store/features/cart';
import styles from './Checkout.styles';
import {stateRestaurant} from '../../store/features/restaurant';
import PaymentTag from '../../component/payment/tags';

const paymentMedods = [
  {
    name: 'Bitcoin',
    image: require('../../../assets/Bitcoin.png'),
  },
  {
    name: 'Metamask',
    image: require('../../../assets/metamask.png'),
  },
  {
    name: 'GooglePay',
    image: require('../../../assets/GooglePay.png'),
  },
  {
    name: 'Paypal',
    image: require('../../../assets/Paypal.png'),
  },
  {
    name: 'Visa',
    image: require('../../../assets/Visa.png'),
  },
  {
    name: 'ApplePay',
    image: require('../../../assets/ApplePay.png'),
  },
];

const Checkout = props => {
  const [subTotal, setSubTotal] = useState(0);
  const [taxValue, setTaxValue] = useState(0);
  const [active, setActive] = useState('');
  const navigation = useNavigation();
  const cartData = useSelector(stateCartMemo);
  const restaurantData = useSelector(stateRestaurant);

  useEffect(() => {
    let totalPrice = 0;
    const allItems = Object.values(cartData.data);
    allItems.forEach(ele => {
      totalPrice = totalPrice + ele.cartCount * ele.price;
    });
    setSubTotal(totalPrice);
    const tax = (restaurantData.data.tax_applicable.value * totalPrice) / 100;
    setTaxValue(Math.floor(tax));
  }, [cartData, restaurantData]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <BackHover dark={true} onPress={() => navigation.goBack()} />
          <H2 passedStyles={styles.title} text="Checkout" />
          <View style={{width: 50}} />
        </View>
        <View style={styles.bill}>
          <View style={styles.priceList}>
            <H2 passedStyles={styles.totalText} text={'Total'} />
            <H2 passedStyles={styles.totalText} text={subTotal} />
          </View>
          <View style={styles.priceList}>
            <H2 passedStyles={styles.totalText} text={'Tax amount'} />
            <H2 passedStyles={styles.totalText} text={taxValue} />
          </View>
          <View style={[styles.priceList, styles.borderTop]}>
            <H2 passedStyles={styles.grandTotalText} text={'Grand total'} />
            <H2
              passedStyles={styles.grandTotalText}
              text={subTotal + taxValue}
            />
          </View>
        </View>
        <H2 passedStyles={styles.paymentMethodText} text="Payment methods" />
        <View style={styles.paymentContainer}>
          {paymentMedods.map(ele => (
            <View key={ele.name}>
              <PaymentTag data={ele} setActive={setActive} active={active} />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.primaryBtn}>
        <PrimaryButton
          passedStyles={{backgroundColor: '#89f58b'}}
          text={'Pay'}
          onPress={() => navigation.navigate('PaymentSucess')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
