import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
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
import {stateCartMemo} from '../../store/features/cart';

function Restaurant() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurantData = useSelector(stateRestaurant);
  const cartData = useSelector(stateCartMemo);
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
        <Offerings data={restaurantData.data} navigation={navigation} />
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Cart', {
            restrauntData: restaurantData.data.additionalData,
          })
        }>
        {cartData.data === null ? null : (
          <View style={styles.cartHoverContainer}>
            <Image
              style={styles.cartHoverImage}
              source={require('../../../assets/cart.png')}
            />
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Restaurant;
