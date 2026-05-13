import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LocationIcon from "../images/Location";
import SupportIcon from "../images/SupportIcon";
import AppleLogo from "../images/AppleLogo";
import CustomButton from "../buttons/Custombutton";

const FooterLay = () => {
  const router = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box mt="3rem">
        <Box textAlign={"center"} mt="0.5rem" mb="3rem">
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <Typography fontSize={{ md: "2.8rem", xs: "2rem" }} fontWeight={"bold"}>
              Get Securefield VPN
            </Typography>
            <Typography fontSize={"18px"} className="gradientText" lineHeight={1.2} textAlign={"left"}>
              Connect Freely
              <br />
              Browse Privately
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1} justifyContent={"center"} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
          <LocationIcon />
          <Typography>Bostanli, Cemal Gursel Caddesi, Karsiyaka, Izmir/Turkey</Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1} justifyContent={"center"} mt={"1rem"} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500" zIndex={1} position="relative">
          <SupportIcon />
          <Typography component="a" href={"mailto:support@securefieldapp.com"} target="_black" style={{ textDecoration: "none", color: "#fff" }}>
            support@securefieldapp.com
          </Typography>
        </Box>

        {/* <Box bgcolor={'#fff'} width={'fit-content'} py='0.3rem' px='2rem' alignSelf={'center'} borderRadius={'15px'} my='2rem' mx='auto' className='cursorPointer' >
                    <AppleLogo />
                </Box> */}
        <Box my="2rem" mx="auto" width={"fit-content"} sx={{ zIndex: 1, position: "relative" }}>
          <CustomButton
            onClick={() => {
              window.open("https://apps.apple.com/us/app/best-unlimited-securefield-vpn/id1328783123", "_blank");
            }}
          />
        </Box>

        <Box textAlign={"center"} mb="1rem">
          <Typography>2023 Copyright Securefield VPN. All rights reserved</Typography>
          <Box display={"flex"} justifyContent={"center"} gap={5}>
            <Typography
              className="cursorPointer"
              color={"#2F79AE"}
              fontWeight={500}
              fontSize={"17px"}
              sx={{ cursor: "pointer", zIndex: 3 }}
              onClick={(e) => {
                e.stopPropagation();
                router("/terms");
              }}
            >
              Terms of Use
            </Typography>

            <Typography
              className="cursorPointer"
              color={"#2F79AE"}
              fontWeight={500}
              fontSize={"17px"}
              sx={{ cursor: "pointer", zIndex: 3 }}
              onClick={(e) => {
                e.stopPropagation();
                router("/policy");
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              className="cursorPointer"
              color={"#2F79AE"}
              fontWeight={500}
              fontSize={"17px"}
              sx={{ cursor: "pointer", zIndex: 3 }}
              onClick={(e) => {
                e.stopPropagation();
                router("/subscriptions");
              }}
            >
              About Subscription
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FooterLay;
