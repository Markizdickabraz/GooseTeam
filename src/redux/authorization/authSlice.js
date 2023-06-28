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
    [register.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload.user };
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload.user };
      state.token = payload.token;
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
    [refreshUser.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload };
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
