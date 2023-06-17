import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';

import styles from './buttons.styles';

const PrimaryButton = ({text, onPress, isLoading}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.primaryBtn}>
        {!isLoading ? (
          <Text style={styles.primaryBtnText}>{text}</Text>
        ) : (
          <ActivityIndicator size="small" color="#0000ff" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
