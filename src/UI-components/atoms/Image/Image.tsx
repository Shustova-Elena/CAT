import { Box } from '@mui/material'

import { boxStyle } from './Image.style'

import { ImgProps } from './Image.type'

export const Image = ({ src, alt, style }: ImgProps) => {
    return (
        <Box sx={boxStyle} component="img" src={src} alt={alt} style={style} />
    )
}
