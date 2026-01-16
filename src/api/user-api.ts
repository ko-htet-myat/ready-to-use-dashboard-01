import { baseApi } from "./base-api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => "/users",
      providesTags: ["User"],
    }),
    getPayrolls: builder.query<any[], void>({
      query: () => "/payrolls",
      providesTags: ["Payrolls"],
    }),
  }),
});

export const { useGetUsersQuery, useGetPayrollsQuery } = userApi;
