import React from 'react';
import {Image, View} from 'react-native';

import styles from './restaurantHero.styles';
import {H1, Legend, H3} from '../texts';
import BackHover from '../buttons/backHover';
import CarouselComponent from '../carousal';

function RestaurantHero({carouselImages, navigation, additionalData}) {
  return (
    <View>
      <CarouselComponent images={carouselImages} />
      <View style={styles.overlay}>
        <BackHover onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.details}>
        <View style={styles.detailsRow1}>
          <H1 text={additionalData.name} />
          <H3 text={additionalData.eta} />
        </View>
        <View style={styles.detailsRow2}>
          <View style={styles.ratingsContainer}>
            {[...Array(additionalData.rating)].map((_, i) => (
              <Image
                style={styles.ratingsImage}
                source={require('../../../assets/star.png')}
              />
            ))}
          </View>
          <View style={styles.distance}>
            <Image
              style={styles.distanceImage}
              source={require('../../../assets/location-minus.png')}
            />
            <Legend text={`${additionalData.distance}km away`} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default RestaurantHero;
