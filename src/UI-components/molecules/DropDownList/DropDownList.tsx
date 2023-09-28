import { useEffect, useState } from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { ChevronDown } from '../../../assets/ChevronDown/ChevronDown'
import { Currency } from '../../../redux/api/currencies'
import { useAppDispatch } from '../../../redux/hooks/hooks'
import { setCurrentCurrency } from '../../../redux/slices/CurrencySlice'

type DropDownListType = {
    data: Currency[]
}

export const DropDownList = ({ data }: DropDownListType) => {
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
            sx={{ width: '181px', height: '43px', borderRadius: '10px' }}
        >
            {data.map(({ id }: Currency) => {
                return (
                    <MenuItem
                        value={id}
                        key={id}
                        sx={{
                            '&.Mui-selected': { backgroundColor: '#F0EFEF' },
                            '&.Mui-selected:hover': {
                                backgroundColor: '#F0EFEF',
                            },
                        }}
                    >
                        {id}
                    </MenuItem>
                )
            })}
        </Select>
    )
}
