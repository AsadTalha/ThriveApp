import React, {useEffect} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  fetchRestaurantdata,
  stateRestaurant,
} from '../../store/features/restaurant';
import styles from './Restaurant.styles';
import {H1, Legend} from '../../component/texts';
import RestaurantHero from '../../component/restaurantHero';
import Offerings from '../../component/offerings';

function Restaurant() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurantData = useSelector(stateRestaurant);

  //To fetch chatroom data
  useEffect(() => {
    dispatch(fetchRestaurantdata());
  }, [dispatch]);

  if (!restaurantData || !restaurantData.data || !restaurantData.data.items) {
    return (
      <View style={styles.errorContainer}>
        <H1 text="Something went wrong." />
        <Legend text="Could not fetch data for the restaurant. Please try again later." />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RestaurantHero
          carouselImages={restaurantData.data.carousel_images}
          navigation={navigation}
          additionalData={restaurantData.data.additionalData}
        />
        <Offerings data={restaurantData.data} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Restaurant;
