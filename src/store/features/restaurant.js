import {createSlice, createAsyncThunk, createSelector} from '@reduxjs/toolkit';

//Action
export const fetchRestaurantdata = createAsyncThunk('fetchTracker', (a, b) => {
  return fetch(
    'https://hashtagloyalty.s3.ap-southeast-1.amazonaws.com/Take+Home+Assignment+-+Thrive.json',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  ).then(response => response.json());
});

//Adding additional data
//Some of the fields in the provided data are empty,
//Adding dummy data to make the UI look good
function addData(data) {
  const imagePath = [
    require('../../../assets/d1.webp'),
    require('../../../assets/d2.webp'),
    require('../../../assets/d3.webp'),
    require('../../../assets/d4.webp'),
    require('../../../assets/d5.webp'),
  ];
  const newData = {...data};
  newData.additionalData = {
    name: 'The Pizza Place',
    rating: 5,
    distance: 4,
    eta: '20 - 30 min',
  };
  let index = 0;
  newData.items.forEach(element => {
    try {
      if (!element.description) {
        element.description =
          'A secret dish one has to taste to eat to know what it is :)';
      }
      element.smallDesc = element.description.substring(0, 30) + '...';
    } catch (err) {
      console.log(err);
    }
    if (element.image === '') {
      const path = imagePath[index];
      index = (index + 1) % 4;
      element.localImage = path;
    }
  });
  return newData;
}

//Initial state
const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

//Reducer
const restaurantSlice = createSlice({
  name: 'resturant',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRestaurantdata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRestaurantdata.fulfilled, (state, action) => {
      state.isLoading = false;
      const withAdditionalData = addData(action.payload);
      state.data = withAdditionalData;
    });
    builder.addCase(fetchRestaurantdata.rejected, (state, action) => {
      state.isError = true;
      console.log('error');
    });
  },
});

export const stateRestaurant = state => {
  return state.resturant;
};

export const stateRestaurantMemo = createSelector(
  [stateRestaurant],
  resturant => {
    return {...resturant};
  },
);

export default restaurantSlice.reducer;
