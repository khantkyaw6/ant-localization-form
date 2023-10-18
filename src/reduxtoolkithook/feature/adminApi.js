import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/api/admin" }),
  endpoints: (builder) => ({
    adminList: builder.query({
      query: () => ({ url: "/", method: "GET" }),
      providesTags: ["Adminapi"],
    }),
    adminAdd: builder.mutation({
      query: ({ data }) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Adminapi"],
    }),
    adminUpdate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Adminapi"],
    }),
  }),
});

export const {
  useAdminListQuery,
  useAdminAddMutation,
  useAdminUpdateMutation,
} = adminApi;
