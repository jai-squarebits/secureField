import { Box, Container, Typography } from "@mui/material";

import ContentIcon from "../images/ContentIcon.svg";
import { FeatureContent } from "../staticContent/StaticContent";
import AppleLogo from "../images/AppleLogo";
import CustomButton from "../buttons/Custombutton";

export default function OurFeatureLay() {
  return (
    <Container maxWidth="lg">
      <Box my="3rem">
        <Box textAlign={"center"} mt="0.5rem" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
          <Typography fontSize={{ md: "2.8rem", xs: "2rem" }} fontWeight={"bold"}>
            Our Features
          </Typography>
          <Typography className="gradientText" fontWeight={500} lineHeight={1.2}>
            Connect Freely
            <br />
            Browse Privately
          </Typography>
        </Box>
        <Box width={"fit-content"} mx="auto">
          {FeatureContent?.map((item) => (
            <Box display={"flex"} gap={3} width={"500px"} mt={"3rem"} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
              <Box className="borderCss">
                <Box width={"120px"} padding={"10px 20px"}>
                  <img src={item?.img} width={"100%"} />
                </Box>
              </Box>
              <Box display={"grid"} alignContent={"space-between"}>
                <Box display={"flex"} position={"relative"}>
                  <Typography fontWeight={500}>{item?.label}</Typography>
                  {item?.onGo && (
                    <Typography position={"absolute"} right={0} fontSize={"16px"} className="gradientText" alignSelf={"flex-end"} fontWeight={500}>
                      {item?.onGo}
                    </Typography>
                  )}
                </Box>
                <Typography fontSize={"14px"}>{item?.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* <Box bgcolor={'#fff'} width={'fit-content'} py='0.3rem' px='2rem' alignSelf={'center'} borderRadius={'15px'} my='2rem' mx='auto' className='cursorPointer' data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="500">
                    <AppleLogo />
                </Box> */}
        <Box width={"fit-content"} my="2rem" mx="auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" position="relative" zIndex={1}>
          <CustomButton
            onClick={() => {
              window.open("https://apps.apple.com/us/app/best-unlimited-securefield-vpn/id1328783123", "_blank");
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
