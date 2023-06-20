import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

const BackHover = ({onPress, dark}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, dark ? styles.dark : {}]}>
        <Text
          style={
            Platform.OS === 'android' ? styles.androidStyle : styles.iosStyle
          }>
          ←
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  androidStyle: {fontSize: 30, fontWeight: '900', marginBottom: 12},
  iosStyle: {fontSize: 24},
});

export default BackHover;
