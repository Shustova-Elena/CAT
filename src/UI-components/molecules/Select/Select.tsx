import { MenuItem, Select } from '@mui/material'

import { ChevronDown } from '../../../assets/ChevronDown'

export const DropDownList = () => {
    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
            IconComponent={ChevronDown}
            sx={{ width: '181px', height: '43px' }}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    )
}
