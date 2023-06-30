import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-tracker-backend.p.goit.global/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    logoutUser: builder.query({
      query: () => 'user/logout',
      providesTags: ['Auth'],
    }),
  }),
});

export const { useLazyLogoutUserQuery } = authApi;
