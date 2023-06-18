import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //card
  cardContainer: {
    marginTop: 30,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 30,
    borderColor: 'rgba(0,0,0,0.3)',
    borderStyle: 'solid',
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
  },
  textContainer: {
    height: 100,
    paddingVertical: 10,
    flex: 1,
    marginLeft: 30,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    width: 20,
    height: 20,
  },

  //Counter
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
  },
  counterButton: {
    backgroundColor: 'rgba(16, 16, 16, 0.3)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    borderRadius: 15,
  },
  counterButtonInactive: {
    backgroundColor: 'rgba(16, 16, 16, 0.1)',
  },
});

export default styles;
