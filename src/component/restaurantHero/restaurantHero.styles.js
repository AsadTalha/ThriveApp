import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  details: {
    width: '90%',
    marginHorizontal: 15,
    marginTop: 20,
  },
  detailsRow1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsRow2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingsContainer: {display: 'flex', flexDirection: 'row'},
  ratingsImage: {width: 14, height: 14, marginRight: 8},
  distance: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceImage: {marginRight: 8},
});

export default styles;
