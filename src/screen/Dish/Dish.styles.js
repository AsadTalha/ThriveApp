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
  price: {color: '#FFA500'},
  images: {
    width: '92%',
    height: 200,
    alignSelf: 'center',
    marginTop: '20%',
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
