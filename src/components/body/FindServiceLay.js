import { Box, Container, Grid, Typography } from '@mui/material'
import { useState } from 'react';

import BgImage from '../images/MapImage.svg'
import IphoneIcon from '../images/iPhone15Pro.svg'
import { CountryData } from '../staticContent/StaticContent'
import { CountryList } from '../staticContent/countryAllData';


import LineBox from '../images/LineBox';

export default function FindServiceLay() {

    const itemsPerPage = 30;
    const [visibleCountries, setVisibleCountries] = useState(itemsPerPage);



    const firstColumn = CountryList?.slice(0, visibleCountries / 2);
    const secondColumn = CountryList?.slice(visibleCountries / 2, visibleCountries);

    const handleLoadMore = () => {
        setVisibleCountries((prevVisibleCountries) => prevVisibleCountries + itemsPerPage);
    };

    return (
        <Container maxWidth="lg">
            <Box my='3rem' >
                <Box textAlign={'center'} mt='0.5rem' mb='3rem' data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <Typography fontSize={{ md: '2.8rem', xs: '2rem' }} fontWeight={'bold'}>
                        Find servers <br />
                        where you need them
                    </Typography>
                </Box>
                <Box sx={{
                    background: `url(${BgImage})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center'

                }}>
                    <Grid container spacing={2} width={'100%'} margin={'0px'}>
                        <Grid item xs={6} display={'flex'} gap={12} position={'relative'} data-aos="fade-up" data-aos-easing="linear"
                            data-aos-duration="500">
                            <Box>
                                {firstColumn?.map((country, index) => (
                                    <Box key={country.name} display={'flex'} gap={3} style={{ opacity: 1 - index / 15 }}>
                                        <Box>
                                            <img src={country?.flag} />
                                        </Box>
                                        <Typography fontSize={'16px'} >
                                            {country.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box>
                                {secondColumn?.map((country, index) => (
                                    <Box key={country.name} display={'flex'} gap={3} style={{ opacity: 1 - index / 15 }}>
                                        <Box>
                                            <img src={country?.flag} />
                                        </Box>
                                        <Typography fontSize={'16px'}>
                                            {country.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box position={'absolute'}
                                bottom={'0px'}
                                display={'flex'}
                                alignItems={'center'}
                                gap={3}
                                // boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                bgcolor={''}
                            >
                                <LineBox /> <Typography fontSize={'16px'}>3200+ servers in 65 countries</Typography><LineBox />
                            </Box>
                        </Grid>
                        <Grid item xs={6} textAlign={'center'} data-aos="fade-up" >
                            <Box data-aos="fade-down" data-aos-easing="linear"
                                data-aos-duration="500">
                                <img src={IphoneIcon} />
                            </Box>
                        </Grid>

                    </Grid>

                </Box>
            </Box>

        </Container >
    )
}
