import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface CurrencyState {
    currentCurrency: string
}

const initialState: CurrencyState = {
    currentCurrency: '',
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrentCurrency: (state, action: PayloadAction<string>) => {
            state.currentCurrency = action.payload
        },
    },
})

export const { setCurrentCurrency } = currencySlice.actions

export default currencySlice.reducer
