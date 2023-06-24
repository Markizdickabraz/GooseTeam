import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterDateReducer } from './filterdate/filterdate-slice';

// import { contactsReduser } from './tasks/contactsSlice';
// import { filterReduser } from './tasks/filterSlice';
import { authReducer } from './authorization/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    filterdate: filterDateReducer,
    // contacts: contactsReduser,
    // filter: filterReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
