import { memo, useEffect, useState } from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { ChevronDown } from '../../../assets/ChevronDown/ChevronDown'
import { Currency } from '../../../redux/api/currencies'
import { useAppDispatch } from '../../../redux/hooks/hooks'
import { setCurrentCurrency } from '../../../redux/slices/CurrencySlice'

import { menuItemStyle, selectStyle } from './DropDownList.style'

type DropDownListType = {
    data: Currency[]
}

export const DropDownList = memo(({ data }: DropDownListType) => {
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        setValue(data[0].id)
        dispatch(setCurrentCurrency(data[0].id))
    }, [])

    const handleChange = (event: SelectChangeEvent<string>) => {
        const target = event.target.value
        setValue(target)
        dispatch(setCurrentCurrency(target))
    }

    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label=""
            onChange={(e) => handleChange(e)}
            IconComponent={ChevronDown}
            sx={selectStyle}
        >
            {data.map(({ id }: Currency) => {
                return (
                    <MenuItem value={id} key={id} sx={menuItemStyle}>
                        {id}
                    </MenuItem>
                )
            })}
        </Select>
    )
})
