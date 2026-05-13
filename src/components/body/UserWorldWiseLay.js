import { Box, Container, Typography } from "@mui/material"

import SliderBox from "../slider/SliderBox"
import { SliderContent } from "../staticContent/StaticContent"
import Iphone14 from '../images/iPhone14Pro.svg'


const UserWorldWiseLay = () => {
    return (
        <Container maxWidth="lg">
            <Box my='3rem' >
                <Box textAlign={'center'} mt='0.5rem' data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <Typography fontSize={{ md: '2.8rem', xs: '2rem' }} fontWeight={'bold'} >
                        Trusted by Users Worldwide
                    </Typography>
                </Box>
                <Box width={'fit-content'} textAlign={'center'} mx='auto' my='3rem' data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <SliderBox data={SliderContent} />
                </Box>
                <Box data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" textAlign={'center'} width={'100%'} height={'300px'}>
                    <Box mx='auto' width={'80%'} height={'100%'} sx={{ backgroundImage: 'url(' + Iphone14 + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                </Box>
            </Box>
        </Container>
    )
}

export default UserWorldWiseLay
