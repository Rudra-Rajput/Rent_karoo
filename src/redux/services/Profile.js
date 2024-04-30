import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server.rentkaroo.com/api/',
  }),
   tagTypes: ["User", "Services", "Product", "Shop", "Enquiry"],

  endpoints: build => ({

    userSendOtp: build.mutation({
      query(data) {
        return {
          url: 'user/sendotp',
          method: 'POST',
          body: data,
        };
      },
    }),

    verifyOtp: build.mutation({
      query(data) {
        return {
          url: 'user/verifyotp',
          method: 'POST',
          body: data,
        };
      },
    }),

    getALlCategory: build.query({
      query() {
        return {
          url: `user/category`,
          method: 'GET',
        }
      },
    }),

    getAllUserProducts: build.query({
      query({dist, search, nearby}) {
        return {
          url: `user/products?dist=${dist}&search=${search}&nearby=${nearby}`,
          method: 'GET',
        }
      },
      providesTags: ["Product"]
    }),

    //2
    getProductByCategoryId: build.query({
      query(id) {
        return {
          url: `user/products/category/${id}`,
          method: 'GET',
        }
      },
    }),

    getMyAllProduct: build.query({
      query(token) {
        return {
          url: `user/myproducts`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      },
      providesTags: ["Product"]
    }),

    //3
    getAllServices: build.query({
      query({search, dist}) {
        return {
          url: `user/services?search=${search}&dist=${dist}`,
          method: 'GET',
        }
      },
      providesTags: ["Services"]
    }),

    //4
    getAllShop: build.query({
      query({search, dist}) {
        return {
          url: `user/shops?search=${search}&dist=${dist}`,
          method: 'GET',
        }
      },
      providesTags: ["Shop"]
    }),

    //5
    getShopProductByShopId: build.query({
      query(shopId) {
        return {
          url: `user/shop/products/${shopId}`,
          method: 'GET',
        }
      },
      providesTags: ["Product"]
    }),
    
    //6
    getAllMyServices: build.query({
      query(token) {
        return {
          url: `user/myservices`,
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'GET',
        }
      },
      providesTags: ["Services"]
    }),

    getUserProfile: build.query({
      query(token) {
        return {
          url: `user/myprofile`,
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'GET',
        }
      },
      providesTags: ["User"]
    }),

    getMyShop: build.query({
      query(token) {
        return {
          url: `shop/myshops`,
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: 'GET',
        }
      },
      providesTags: ["Shop"]
    }),

    updateUserProfile: build.mutation({
      query({token, data}) {
        return {
          url: `user/update`,
          method: 'POST',
          body: data,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      },
      invalidatesTags: ["User"]
    }),

    uploadProduct: build.mutation({
      query({token, data}) {
        return {
          url: `product/create`,
          method: 'POST',
          body: data,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      },
      invalidatesTags: ["Product"]
    }),

    addService: build.mutation({
      query({token, data}) {
        return {
          url: `service/create`,
          method: 'POST',
          body: data,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      },
      invalidatesTags: ["Services"]
    }),

    CreateSpecialShop: build.mutation({
      query({token, data}) {
        return {
          url: `shop/create`,
          method: 'POST',
          body: data,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      },
      invalidatesTags: ["Shop"]
    }),

    genarateEnquiry: build.mutation({
      query(data) {
        return {
          url: `enquiry-create`,
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ["Enquiry"]
    }),

  }),
});

export const {
   useGenarateEnquiryMutation,
    useCreateSpecialShopMutation,
    useGetMyShopQuery,
    useUpdateUserProfileMutation,
    useGetUserProfileQuery,
    useGetShopProductByShopIdQuery,
    useGetAllShopQuery,
    useAddServiceMutation,
    useGetAllServicesQuery,
    useGetAllMyServicesQuery,
    useUploadProductMutation,
    useGetMyAllProductQuery,
    useGetProductByCategoryIdQuery,
    useGetAllUserProductsQuery,
    useGetALlCategoryQuery,
    useUserSendOtpMutation,
    useVerifyOtpMutation,
} = profileApi;
