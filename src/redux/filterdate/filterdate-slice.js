import { createSlice } from '@reduxjs/toolkit';

const filterDateSlice = createSlice({
  name: 'filterdate',
  initialState: new Date()[Symbol.toPrimitive]('number'),
  reducers: {
    setFilterDate: (_, { payload }) => payload,
  },
});

export const { setFilterDate } = filterDateSlice.actions;
export const filterDateReducer = filterDateSlice.reducer;
