import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MesssageResponse} from "../../types/api-types";
import { IRegisterUserApi, ILoginUserApi } from "../../types/user-types";


const server = import.meta.env.VITE_SERVER;

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/user` }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<MesssageResponse, IRegisterUserApi>({
            query: (user) => ({
                url: "register",
                method: "POST",
                body: user,
            })
        }),
        loginUser: builder.mutation<MesssageResponse, ILoginUserApi>({
            query: (user) => ({
                url: "login",
                method: "POST",
                body: user,
            })
        }),

    })

});




export const { useRegisterUserMutation, useLoginUserMutation } = userApi;