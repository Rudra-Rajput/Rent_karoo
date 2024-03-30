import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server.meteoto.in/api/',
  }),
   tagTypes: ["Status", "Request", "Jobcardstatus", "Shop"],

  endpoints: build => ({
    venderLogin: build.mutation({
      query(data) {
        return {
          url: 'vendor/login',
          method: 'POST',
          body: data,
        };
      },
    }),

    sendOtpVendor: build.mutation({
      query(data) {
        return {
          url: 'vendor/otpsent',
          method: 'POST',
          body: data,
        };
      },
    }),

    allServicesByGarage: build.query({
      query(id) {
        return {
          url: `allservices/by/garage/${id}`,
          method: 'GET',
          // body:data,
        };
      },
        providesTags: ['Request'],
    }),

    updateShop: build.mutation({
      query({id, data}) {
        return {
          url: `updateShop/${id}`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['Shop']
    }),

  }),
});

export const {
  
} = profileApi;
