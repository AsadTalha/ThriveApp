import {configureStore} from '@reduxjs/toolkit';

import restaurantSlice from './features/restaurant';
import cartSlice from './features/cart';

export const store = configureStore({
  reducer: {
    resturant: restaurantSlice,
    cart: cartSlice,
  },
});
