import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {H2, Legend} from '../../component/texts';
import BackHover from '../../component/buttons/backHover';
import PrimaryButton from '../../component/buttons/primary';

import styles from './Dish.styles';

const Dish = props => {
  const navigation = useNavigation();

  const data = props.route.params;
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
        <PrimaryButton text="Add to Cart" />
      </View>
    </SafeAreaView>
  );
};

export default Dish;
