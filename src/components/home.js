import { Box, CssBaseline, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import NavBar from "./header/NavBar";
import BannerLay from "./body/BannerLay";
import HighTechLay from "./body/HighTechLay";
import UserWorldWiseLay from "./body/UserWorldWiseLay";
import OurFeatureLay from "./body/OurFeatureLay";
import FindServiceLay from "./body/FindServiceLay";
import FooterLay from "./body/FooterLay";

import BgBack from "./images/Noise.png";

function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const sectionRefs = {
    bannerRef: useRef(null),
    featureRef: useRef(null),
    serviceRef: useRef(null),
    reviewRef: useRef(null),
  };

  const scrollToSection = (section) => {
    setActiveTab(section);
    const targetElement = document.getElementById(section);

    if (targetElement) {
      const headerElement = document.querySelector("nav");
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;
      const marginTop = 0;
      const topOffset = targetElement.offsetTop - headerHeight - marginTop;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionPositions = Object.keys(sectionRefs).map((section) => {
      const element = sectionRefs[section].current;
      if (element) {
        return {
          id: section,
          offsetTop: element.offsetTop,
          offsetBottom: element.offsetTop + element.offsetHeight,
        };
      }
      return null;
    });
    const inViewSection = sectionPositions.find(
      (section) =>
        scrollPosition >= section.offsetTop - window.innerHeight / 2 &&
        scrollPosition <= section.offsetBottom - window.innerHeight / 2
    );

    setActiveTab(inViewSection ? inViewSection.id : null);
    // window.location.hash = inViewSection?.id
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll2 = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 50) {
      setNavbarColor("lightblue");
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        activeTab={activeTab}
        bgColor={navbarColor}
      />

      <Box
        ref={sectionRefs?.bannerRef}
        id="section1"
        overflow={"hidden"}
        sx={{ position: "relative", zIndex: 999 }}
      >
        <BannerLay />
      </Box>
      <Box overflow={"hidden"}>
        <HighTechLay />
      </Box>
      <Box
        ref={sectionRefs?.reviewRef}
        id="section2"
        overflow={"hidden"}
        sx={{ position: "relative", zIndex: 999 }}
      >
        <UserWorldWiseLay />
      </Box>
      <Box ref={sectionRefs?.featureRef} id="section3" overflow={"hidden"}>
        <OurFeatureLay />
      </Box>
      <Box
        ref={sectionRefs?.serviceRef}
        id="section4"
        overflow={"hidden"}
        sx={{ position: "relative", zIndex: 999 }}
      >
        <FindServiceLay />
      </Box>
      <Box overflow={"hidden"}>
        <FooterLay />
      </Box>
    </>
  );
}

export default Home;
