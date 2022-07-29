import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Product from '../Companents/Product/Product'
export const productsApi = createApi({
    reducerPath:  'products',
    baseQuery: fetchBaseQuery({baseUrl  : ' http://localhost:3000'}),
    endpoints: (builder)=> ({
        getProducts: builder.query({
            query:  ()=>({
                url:"/products"
            })
        })
    })
});