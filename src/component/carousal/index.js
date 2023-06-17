import React from 'react';
import Carousel from 'react-native-banner-carousel';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const CarouselImage = (image, index) => {
  return (
    <View key={index}>
      <Image style={styles.images} source={{uri: image}} />
      <View style={styles.overlay} />
    </View>
  );
};

const CarouselComponent = ({images}) => {
  return (
    <View style={styles.container}>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}>
        {images.map((image, index) => CarouselImage(image, index))}
      </Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  images: {width: BannerWidth, height: 200},
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    width: BannerWidth,
    height: 200,
  },
});

export default CarouselComponent;
