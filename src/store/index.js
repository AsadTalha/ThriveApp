import {configureStore} from '@reduxjs/toolkit';

import restaurantSlice from './features/restaurant';

export const store = configureStore({
  reducer: {
    resturant: restaurantSlice,
  },
});
