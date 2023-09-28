import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

import { Currency, useGetCurrenciesQuery } from '../../redux/api/currencies'
import { useAppSelector } from '../../redux/hooks/hooks'

import { boxStyle, textStyle } from './BottomComponent.style'

export const BottomComponent = () => {
    const currentCurrencyId = useAppSelector<string>(
        (state) => state.currency.currentCurrency
    )
    const { data: dataList } = useGetCurrenciesQuery()
    const data = dataList ? dataList.data : []
    const [value, setValue] = useState<string>(currentCurrencyId)

    useEffect(() => {
        const currency = data.find(
            (item: Currency) => item.id === currentCurrencyId
        ) as Currency
        setValue(currency ? currency.name : '')
    }, [currentCurrencyId])

    return (
        <Box sx={boxStyle}>
            <Typography sx={textStyle}>{value}</Typography>
        </Box>
    )
}
