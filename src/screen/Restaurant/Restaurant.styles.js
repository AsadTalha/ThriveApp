import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // paddingHorizontal: 10,
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  cartHoverContainer: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 50,
    padding: 8,
  },
  cartHoverImage: {width: 40, height: 40},
});

export default styles;
