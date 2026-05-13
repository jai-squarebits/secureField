import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";

import Mockup from "../images/Mockup.svg";
import AppleLogo from "../images/AppleLogo";
import CustomButton from "../buttons/Custombutton";

const BannerLay = () => {
  return (
    <Container maxWidth="lg">
      <Box my="3rem">
        <Box>
          <Grid container spacing={2} width={"100%"} margin={"0px"} justifyContent={"space-between"} alignItems={"center"}>
            <Grid item xs={5}>
              <Typography fontSize={{ md: "2.8rem", xs: "2rem" }} fontWeight={"bold"} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                Experience True Internet Freedom!
              </Typography>
              <Typography fontSize={"1.2rem"} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                Navigate the web with our VPN mobile app. High-grade encryption meets unrestricted access. Dive in securely and explore without limits.
              </Typography>

              {/* <Box data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" bgcolor={'#fff'} width={'fit-content'} py='0.3rem' px='2rem' alignSelf={'center'} borderRadius={'15px'} mt='2rem' className='cursorPointer' >
                                <AppleLogo />
                            </Box> */}
              <Box data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" mt="2rem" zIndex={1} position="relative">
                <CustomButton
                  onClick={() => {
                    window.open("https://apps.apple.com/us/app/best-unlimited-securefield-vpn/id1328783123", "_blank");
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" sx={{ position: "relative", zIndex: 999 }}>
                <img src={Mockup} width={"80%"} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default BannerLay;
