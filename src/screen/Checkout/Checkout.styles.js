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
  primaryBtn: {
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  priceList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  bill: {
    marginHorizontal: 40,
    marginBottom: 14,
    marginTop: '20%',
  },
  totalText: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
  },
  grandTotalText: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.9)',
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    paddingTop: 14,
  },

  paymentMethodText: {
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginBottom: 14,
    color: 'rgba(0,0,0,0.8)',
  },
  paymentContainer: {
    width: '100%',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
});

export default styles;
