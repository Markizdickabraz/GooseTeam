import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  refreshUser,
  resendEmail,
} from './operations';

const INIT_STATE = {
  name: null,
  email: null,
  id: null,
  avatarURL: '',
  birthday: '',
  phone: '',
  skype: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: INIT_STATE,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    resendEmain: null,
  },
  reducers: {
    setResendEmail: (state, action) => {
      state.resendEmain = action.payload;
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload.user };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload.user };
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [resendEmail.fulfilled](state, { payload }) {
      state.resendEmain = payload.resendEmain;
    },

    [logOut.fulfilled](state) {
      state.user = INIT_STATE;
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload.user };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const { setResendEmail } = authSlice.actions;

export const authReducer = authSlice.reducer;
