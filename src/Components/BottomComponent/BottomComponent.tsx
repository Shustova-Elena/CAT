import { Box, Typography } from '@mui/material'

import { Currency, useGetCurrenciesQuery } from '../../redux/api/currencies'
import { useAppSelector } from '../../redux/hooks/hooks'

import { boxStyle, textStyle } from './BottomComponent.style'

export const BottomComponent = () => {
    const currentCurrencyId = useAppSelector<string>(
        (state) => state.currency.currentCurrency
    )

    const { data } = useGetCurrenciesQuery()

    const currencyName = (data?.data || []).find(
        (item: Currency) => item.id === currentCurrencyId
    )?.name

    return (
        <Box sx={boxStyle}>
            <Typography sx={textStyle}>{currencyName}</Typography>
        </Box>
    )
}
