import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  refreshUser,
  resendEmail,
  updateUser,
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
    isRefreshing: true,
    resendEmail: null,
    theme: 'light',
  },
  reducers: {
    setResendEmail: (state, action) => {
      state.resendEmail = action.payload;
    },
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload.user };
      state.token = payload.token;
      // state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload.user };
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [resendEmail.fulfilled](state, { payload }) {
      state.resendEmail = payload.resendEmail;
    },

    [updateUser.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload.data.result };
    },

    [logOut.pending](state) {
      state.user = INIT_STATE;
      state.token = null;
      state.isLoggedIn = false;
    },

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = { ...state.user, ...payload.user };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const { setResendEmail, toggleTheme } = authSlice.actions;

export const authReducer = authSlice.reducer;
