import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  ProductsResponse } from "../../types/api-types";


const server = import.meta.env.VITE_SERVER;

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/product` }),
    endpoints: (builder) => ({
        latestProducts: builder.query<ProductsResponse, void>({
            query: () => 'latest',
        }),
        allProducts: builder.query<ProductsResponse, void>({
            query: () => `all`,
        }),
    })
})





export const { useLatestProductsQuery, useAllProductsQuery } = productApi;
