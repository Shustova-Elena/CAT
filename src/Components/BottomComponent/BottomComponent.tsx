import { Typography, Box } from '@mui/material'
import { boxStyle, textStyle } from './BottomComponent.style'

export const BottomComponent = () => {
    return (
        <Box sx={boxStyle}>
            <Typography sx={textStyle}>BottomComponent</Typography>
        </Box>
    )
}
