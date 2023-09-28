import { Box } from '@mui/material'

import { BottomComponent } from '../../Components/BottomComponent'
import { TopComponent } from '../../Components/TopComponent'

import { boxStyle } from './MainPage.style'

export const MainPage = () => {
    return (
        <Box sx={boxStyle}>
            <TopComponent />
            <BottomComponent />
        </Box>
    )
}
