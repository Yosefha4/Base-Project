import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost" }),
  endpoints: (builder) => ({}),
});

export const {} = apiService;
