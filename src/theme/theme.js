import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0074DD",
      dark: "#000",
      contrastText: "#fff",
      danger: "red",
      borderStyle: "1px solid #E1DFEC",
    },
    secondary: {
      light: "#ff7961",
      main: "#707070",
      dark: "#ba000d",
      contrastText: "#707070",
    },
  },
  typography: {
    body1: {
      fontFamily: "sfb",
      fontSize: "20px",
    },
    color: "#000",
    button: {
      textTransform: "none !important",
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        textTransform: "none !important",
      },
    },
  },
});
