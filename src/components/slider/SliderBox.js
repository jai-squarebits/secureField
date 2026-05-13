import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import Slider from "react-slick";

const WrraperBox = styled.div`
.slick-prev , .slick-next{
display:none !important;
}
.slick-dots li button:before{
    color:#fff;
}
`


const SliderBox = ({ data = [] }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <WrraperBox>
            <Box width={'450px'} className='borderCss' >
                <Slider {...settings}>
                    {data?.map((item) =>
                        <Box key={item?.id} width={'90% !important'} padding={'1rem'} textAlign={'center'}>
                            <Typography fontSize={'18px'} mb='1rem' fontWeight={500}>{item?.label}</Typography>
                            <Typography fontSize={'14px'} fontWeight={500}>
                                {item?.title}
                            </Typography>
                        </Box>
                    )}
                </Slider>
            </Box>
        </WrraperBox>
    );
};

export default SliderBox;
