import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterStatus: {
      reducer(state, action) {
        return action.payload.value;
      },
      prepare(formValue) {
        return {
          payload: {
            value: formValue,
          },
        };
      },
    },
  },
});

const filterReduser = filterSlice.reducer;
const { setFilterStatus } = filterSlice.actions;

export { filterReduser, setFilterStatus };
