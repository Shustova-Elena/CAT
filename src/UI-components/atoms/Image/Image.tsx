import { Box } from '@mui/material'

import { ImgProps } from './Image.type'

export const Image = ({ src, alt }: ImgProps) => {
    return <Box sx={{ height: '100%' }} component="img" src={src} alt={alt} />
}
