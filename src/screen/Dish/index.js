import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {H2, Legend} from '../../component/texts';
import BackHover from '../../component/buttons/backHover';
import PrimaryButton from '../../component/buttons/primary';
import {addItem, removeItem, stateCartMemo} from '../../store/features/cart';
import styles from './Dish.styles';

const Dish = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartData = useSelector(stateCartMemo);

  const data = props.route.params.data;
  const restrauntData = props.route.params.restrauntData;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackHover dark={true} onPress={() => navigation.goBack()} />
        <H2 passedStyles={styles.title} text={data.name} />
        <H2 passedStyles={styles.price} text={`₹${data.price}`} />
      </View>
      <Image
        style={styles.images}
        source={data.image ? {uri: data.image} : data.localImage}
        alt="No image"
      />

      <View style={styles.description}>
        <Legend passedStyles={styles.description} text={data.description} />
        <Image
          style={styles.tag}
          source={
            data.item_type === 'non-veg'
              ? require('../../../assets/nonveg.png')
              : require('../../../assets/veg.png')
          }
        />
      </View>
      <View style={styles.primaryBtn}>
        {cartData && cartData.data && cartData.data[data.id] ? (
          <PrimaryButton
            passedStyles={{backgroundColor: '#89f58b'}}
            text="Go to Cart"
            onPress={() => navigation.navigate('Cart', {restrauntData})}
          />
        ) : (
          <PrimaryButton
            text="Add to Cart"
            onPress={() => dispatch(addItem(data))}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Dish;
