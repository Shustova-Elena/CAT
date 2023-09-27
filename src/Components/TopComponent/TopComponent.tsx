import { Box, Container } from '@mui/material'

import { Image } from '../../UI-components/atoms/Image'
import { Title } from '../../UI-components/atoms/Title'
import { DropDownList } from '../../UI-components/molecules/Select'

import { altText, KittenImage } from './TopComponent.const'

import { boxStyle, containerStyle } from './TopComponent.style'

export const TopComponent = () => {
    return (
        <Box sx={boxStyle}>
            <Container sx={containerStyle}>
                <Title />
                <DropDownList />
            </Container>
            <Image src={KittenImage} alt={altText} />
        </Box>
    )
}
