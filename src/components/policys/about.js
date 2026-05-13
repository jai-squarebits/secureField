import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function About() {
  const router = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box py="2rem">
        <Typography component="h3" textAlign="center" style={{ fontFamily: "Helvetica" }} py="1rem">
          About Subscription
        </Typography>

        <Typography component="ul">
          <li>Subscription periods are 1 week / 1 month / 6 months and 1 year.</li>
          <li>Every 1 week / 1 month / 6 months or 1 year your subscription renews.</li>
          <li>1 week subscription price is $7.99. 1 month subscription price is $14.99. 6 months subscription price is $39.99. 1 year price is $69.99.</li>
          <li>Payment will be charged to iTunes Account at confirmation of purchase.</li>
          <li>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.</li>
          <li>Account will be charged for renewal within 24-hours prior to the end of the current period.</li>
          <li>
            You can cancel your subscription via this url:{" "}
            <a style={{ textDecoration: "none", color: "#35DF91", zIndex: 1, position: "relative" }} href="https://support.apple.com/en-us/HT202039">
              https://support.apple.com/en-us/HT202039
            </a>
          </li>
          <Typography component="li">
            <Box display="flex" alignItems="center" gap="5px">
              <Typography>Term of use: </Typography>
              <Typography
                className="cursorPointer"
                color={"#2F79AE"}
                fontWeight={500}
                onClick={(e) => {
                  e.stopPropagation();
                  router("/terms");
                }}
                sx={{ textDecoration: "none", color: "#35DF91", cursor: "pointer", zIndex: 1 }}
                position="relative"
              >
                Term of use
              </Typography>
            </Box>
          </Typography>
          <Typography component="li">
            <Box display="flex" alignItems="center" gap="5px">
              <Typography>Privacy policy: </Typography>
              <Typography
                className="cursorPointer"
                color={"#2F79AE"}
                fontWeight={500}
                onClick={(e) => {
                  e.stopPropagation();
                  router("/policy");
                }}
                sx={{ textDecoration: "none", color: "#35DF91", cursor: "pointer", zIndex: 1 }}
                position="relative"
              >
                Privacy policy
              </Typography>
            </Box>
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
}
