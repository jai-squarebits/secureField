import React, { useEffect } from "react";

import { Box, Container, Typography } from "@mui/material";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxWidth="lg">
      <Box py="2rem">
        <Typography component="h3" textAlign="center" py="1rem">
          PRIVACY POLICY
        </Typography>
        <Typography>The Securefield VPN provides a Virtual Private Networking (VPN) service and other Internet privacy features. Privacy Policy defines how user data is treated at Securefield VPN. Our top priority is customer data safety.</Typography>
        <Typography component="h3">Securefield Security</Typography>
        <Typography>From the moment a Securefield VPN user turns on the Securefield VPN software, their Internet data becomes encrypted. Further, Securefield have a strict no logs policy but it comes to seeing user activity online which may ask for data logging or reporting, Securefield may allow some third party requests in some conditions.</Typography>
        <Typography component="h3">Service performance</Typography>
        <Typography>Servers load. We monitor the server performance in order to recommend the most favorable servers to our customers.</Typography>
        <Typography component="h3">About Data</Typography>
        <Typography component="h4">Cookies</Typography>
        <Typography component="ul">
          <li>Securefield VPN may use some different cookies to develop the user experience on the website:</li>
          <li>Securefield may use some websites cookies for statistical evaluation and website performance development.</li>
          <li>We may also use affiliate and refer-a-friend cookies to identify the customers referred to the Site by our partners/customers.</li>
          <li>Securefield may also use cookies to personalize the index of the Site for users, such as setting the default language.</li>
          <li>In substance, all the website and service performance data is used for our user experience improvement, and none of the data is relevant to our customer activity while utilizing the Securefield VPN service.</li>
          <li>Furthermore, servers may be provided by other websites or brokerage houses.</li>
        </Typography>
        <Typography component="h3">Policy modifications</Typography>
        <Typography>You understand that the present Privacy Policy is subject to amendments made by Securefield VPN at any time at its sole discretion.</Typography>
        <Typography component="h3">Contact</Typography>
        <Typography>
          If you have any questions regarding the data protection regulation, you can reach us at{" "}
          <a href="mailto:support@securefieldapp.com" style={{ color: "#35DF91", position: "relative", zIndex: 1 }}>
            support@securefieldapp.com
          </a>
        </Typography>
      </Box>
    </Container>
  );
}
