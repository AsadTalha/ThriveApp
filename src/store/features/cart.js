import {createSlice, createSelector} from '@reduxjs/toolkit';

//Initial state
const initialState = {
  data: null,
  isError: false,
};

//Reducer
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      if (state.data) {
        if (state.data[item.id]) {
          state.data[item.id].cartCount = state.data[item.id].cartCount + 1;
        } else {
          state.data[item.id] = {...item, cartCount: 1};
        }
      } else {
        state.data = {[item.id]: {...item, cartCount: 1}};
      }
    },
    removeItem(state, action) {
      const {itemId, removeAll} = action.payload;
      if (!state.data[itemId]) {
        console.log('Element not present in the store');
        return null;
      }
      if (removeAll || state.data[itemId].cartCount === 1) {
        delete state.data[itemId];
      } else {
        state.data[itemId].cartCount = state.data[itemId].cartCount - 1;
      }
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export const stateCart = state => {
  return state.cart;
};

export const stateCartMemo = createSelector([stateCart], cart => {
  return {...cart};
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
