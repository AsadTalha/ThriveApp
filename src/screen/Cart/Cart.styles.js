import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '94%',
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {fontWeight: 'bold', maxWidth: 240},
  cartBody: {width: '90%', alignSelf: 'center', marginTop: 30},
  margin: {height: 100},

  images: {
    width: 332,
    height: 200,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 14,
  },
  description: {
    width: '94%',
    alignSelf: 'center',
    marginTop: 0,
  },
  tag: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  primaryBtn: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
});

export default styles;
