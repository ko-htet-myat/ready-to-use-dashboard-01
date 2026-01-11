import { baseApi } from "./base-api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string; refreshToken: string; user: any },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
