import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 34,
    paddingHorizontal: 10,
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginBottom: 8,
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
    maxWidth: 120,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#797D82',
    paddingRight: 14,
  },
  active: {
    borderColor: '#4d4f52',
    fontWeight: '800',
    backgroundColor: '#edffeb',
  },
  tagText: {
    marginLeft: 4,
  },
  tagTextActive: {
    marginLeft: 4,
    fontWeight: '800',
  },
  //card
  cardContainer: {
    marginBottom: 10,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    width: 180,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
  },
  tag: {
    width: 20,
    height: 20,
  },
});

export default styles;
