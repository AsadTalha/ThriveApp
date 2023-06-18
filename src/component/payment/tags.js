import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './payment.styles';

const PaymentTag = ({data, setActive, active}) => {
  return (
    <TouchableOpacity onPress={() => setActive(data.name)}>
      <View
        style={[
          styles.paymentImageContainer,
          active === data.name ? styles.active : null,
        ]}>
        <Image style={styles.paymentImage} source={data.image} />
      </View>
    </TouchableOpacity>
  );
};

export default PaymentTag;
