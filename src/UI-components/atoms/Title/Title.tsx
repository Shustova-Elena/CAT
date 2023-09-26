import { Box, Typography } from '@mui/material'

import { subTitle, title } from './Title.const'

import { subTitleStyle, titleStyle, boxStyle } from './Title.style'

export const Title = () => {
    return (
        <Box sx={boxStyle}>
            <Typography sx={titleStyle} variant="h1" component="h2">
                {title}
            </Typography>
            <Typography sx={subTitleStyle} variant="h1" component="h2">
                {subTitle}
            </Typography>
        </Box>
    )
}
