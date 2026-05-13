import { Box, Container, Typography } from "@mui/material"

import QRLogo from '../images/QR.svg'
import TitleLogo from '../images/Title.png'


const HighTechLay = () => {
    return (
        <Container maxWidth="lg">
            <Box my='3rem' >
                <Box width={300} mx={'auto'} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500" >
                    <img src={TitleLogo} width={'100%'} />
                </Box>
                <Box textAlign={'center'} mt='0.5rem' data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <Typography px='1rem'>
                        A safe and private connection between your device and the web that encrypts your personal data and online activities. Compared to alternatives, our protocols use less code, which means it has a smaller “attack surface” for hackers exploit. Its lighter code base also makes software code audits easier, allowing engineers to find potential vulnerabilities and bugs more quickly. We aim to be faster, simpler, leaner and more useful.
                    </Typography>
                </Box>
                <Box display={'flex'} className='borderCss' width={'fit-content'} p={'1rem'} gap={2} mx='auto' my='5rem' data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <Box>
                        <img src={QRLogo} />
                    </Box>
                    <Box display={'grid'} alignContent={'space-between'}>
                        <Typography fontSize={'1.2rem'} lineHeight={1.3}>
                            Trusted by 1M people,<br /> how about you?
                        </Typography>
                        <Typography className='gradientText' fontSize={'16px'}>
                            Get Securefield VPN
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default HighTechLay
