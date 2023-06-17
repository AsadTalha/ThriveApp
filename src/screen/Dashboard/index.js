import React, {useEffect} from 'react';
import {Image, SafeAreaView, Alert, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  fetchRestaurantdata,
  stateRestaurant,
} from '../../store/features/restaurant';
import styles from './Dashboard.styles';
import {H1, Legend} from '../../component/texts';
import PrimaryButton from '../../component/buttons/primary';

const noNetworkAlert = () =>
  Alert.alert(
    'Network issue',
    'Could connect to the server, please try again later',
    [
      {
        text: 'Okay',
        onPress: () => console.log('Okay'),
      },
    ],
  );

function Dashboard() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurantData = useSelector(stateRestaurant);

  //To fetch chatroom data
  useEffect(() => {
    dispatch(fetchRestaurantdata());
  }, [dispatch]);

  const goToRestaurant = () => {
    if (restaurantData?.data?.items) {
      navigation.navigate('Restaurant', {});
    } else {
      noNetworkAlert();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/landing.jpg')}
      />
      <View style={styles.textContainer}>
        <H1 text="Food to blow your mind!" />
        <Legend text="Whether you're craving pizza, sushi, or something in between, we have got your back" />
      </View>
      <View style={styles.footerHover}>
        <PrimaryButton
          text={'Go to Restaurant'}
          onPress={goToRestaurant}
          isLoading={restaurantData.isLoading}
        />
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
