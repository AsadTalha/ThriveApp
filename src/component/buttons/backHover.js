import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const BackHover = ({onPress, dark}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, dark ? styles.dark : {}]}>
        <Text style={{fontSize: 24}}>←</Text>
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
});

export default BackHover;
