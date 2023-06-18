import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 271,
    width: 200,
  },
  legend: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  primaryBtnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 30,

    flexDirection: 'row',
    width: '100%',
  },
  primaryBtn: {
    width: '50%',
  },
});

export default styles;
