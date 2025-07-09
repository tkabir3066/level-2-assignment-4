import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://level-2-assignment-3-iwyg.vercel.app/api",
  }),
  endpoints: (builder) => ({
    // get all books
    getBooks: builder.query({
      query: ({
        page = 1,
        limit = 10,
        sort = "desc",
        sortBy = "createdAt",
        filter = "",
      }) =>
        `/books?page=${page}&limit=${limit}&sort=${sort}&sortBy=${sortBy}&filter=${filter}`,
    }),
  }),
});

export const { useGetBooksQuery } = baseApi;
