import React from 'react';
import {Text} from 'react-native';

import styles from './text.styles';

const H1 = ({text}) => {
  return <Text style={styles.h1}>{text}</Text>;
};

const H2 = ({text, passedStyles}) => {
  return <Text style={[styles.h2, passedStyles]}>{text}</Text>;
};

const H3 = ({text}) => {
  return <Text style={styles.h3}>{text}</Text>;
};

const Pargraph = ({text, passedStyles}) => {
  return <Text style={[passedStyles, styles.p]}>{text}</Text>;
};

const Legend = ({text, passedStyles}) => {
  return <Text style={[styles.legend, passedStyles]}>{text}</Text>;
};

export {H1, H2, H3, Pargraph, Legend};
