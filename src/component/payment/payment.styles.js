import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paymentImageContainer: {
    borderWidth: 1,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  paymentImage: {width: 80, height: 35},
  active: {
    borderWidth: 1,
    borderColor: '#FFA500',
  },
});

export default styles;
