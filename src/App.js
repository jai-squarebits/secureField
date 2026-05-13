import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import { Box } from "@mui/material";

import BgBack from "./components/images/Noise.png";

import RouterLay from "./components/router/router";

AOS.init();

function App() {
  return (
    <>
      <Box
        className="App-header"
        sx={{
          position: "relative",
          background: "linear-gradient(108deg, #172231 0%, #030507 50%, #030507 70%)",
          width: "100%",
          "&:after": {
            width: "100%",
            position: "absolute",
            background: `url(${BgBack})`,
            mixBlendMode: "soft-light",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            left: "0px",
            top: "0px",
            // zIndex: 2,
          },
        }}
      >
        <RouterLay />
      </Box>
    </>
  );
}

export default App;
