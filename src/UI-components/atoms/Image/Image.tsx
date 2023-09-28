import { Box } from '@mui/material'

import { ImgProps } from './Image.type'

export const Image = ({ src, alt }: ImgProps) => {
    return <Box sx={{ width: 225, height: 341, }} component="img" src={src} alt={alt} />
}
