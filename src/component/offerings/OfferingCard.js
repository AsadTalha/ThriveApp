import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {H3, Pargraph, Legend} from '../texts';

import styles from './offerings.styles';
const OfferingCard = ({data, nonVeg, veg, navigation, restrauntData}) => {
  if (data.item_type === 'non-veg' && !nonVeg) {
    return null;
  }
  if (data.item_type !== 'non-veg' && !veg) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Dish', {data, restrauntData})}>
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
          <Legend passedStyles={{marginTop: 8}} text={data.smallDesc} />
        </View>
        <View style={styles.priceContainer}>
          <Image
            style={styles.tag}
            source={
              data.item_type === 'non-veg'
                ? require('../../../assets/nonveg.png')
                : require('../../../assets/veg.png')
            }
          />
          <Pargraph text={`₹${data.price}`} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferingCard;
