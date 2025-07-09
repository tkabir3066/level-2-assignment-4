import type { IBook } from "@/types";
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

    //create a new book

    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
    }),

    // getting a single book
    getBook: builder.query({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "GET",
      }),
    }),

    // updating a book
    updateBook: builder.mutation<
      IBook,
      { bookId: string; bookData: Partial<IBook> }
    >({
      query: ({ bookId, bookData }) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        body: bookData,
      }),
    }),

    // deleting a book
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
    }),

    // borrowing a book
    borrowBook: builder.mutation({
      query: (bookData) => ({
        url: "/borrow",
        method: "POST",
        body: bookData,
      }),
    }),

    //get summary
    getBorrowSummary: builder.query({
      query: () => "/borrow",
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useGetBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = baseApi;
