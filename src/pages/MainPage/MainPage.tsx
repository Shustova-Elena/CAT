import { Box } from '@mui/material'

import { BottomComponent } from '../../Components/BottomComponent'
import { TopComponent } from '../../Components/TopComponent'

export const MainPage = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            <TopComponent />
            <BottomComponent />
        </Box>
    )
}
