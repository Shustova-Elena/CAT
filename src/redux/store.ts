import { configureStore } from '@reduxjs/toolkit'

import { currenciesApi } from './api/currencies'
import currencyReducer from './slices/CurrencySlice'

export const store = configureStore({
    reducer: {
        currency: currencyReducer,
        [currenciesApi.reducerPath]: currenciesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currenciesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
