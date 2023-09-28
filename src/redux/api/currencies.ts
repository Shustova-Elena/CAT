import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Currency {
    id: string
    name: string
    min_size: string
}

interface Data {
    data: Currency[]
}

const BASE_URL = 'https://api.coinbase.com/v2/'

export const currenciesApi = createApi({
    reducerPath: 'currenciesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCurrencies: builder.query<Data, void>({
            query: () => 'currencies',
        }),
    }),
})

export const { useGetCurrenciesQuery } = currenciesApi
