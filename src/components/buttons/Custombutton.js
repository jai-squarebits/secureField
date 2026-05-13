import { Box, Button, Typography } from '@mui/material'

import AppleIcon from '../images/AppleIcon.svg'

const CustomButton = ({ ...props }) => {
    return (
        <Button sx={{
            borderRadius: "20px",
            padding: '10px 50px',
            // width: "100%",
            // height: height,
            boxShadow: "none",
            background: '#fff',
            ":hover": {
                background: ' #fff',
                boxShadow: "none",
            },
        }}
            startIcon={<img src={AppleIcon} />}
            {...props}
        >

            < Box >
                <Typography fontSize={'14px'} color={'black'} lineHeight={1}>
                    Download on the
                </Typography>
                <Typography fontSize={'20px'} color={'black'} fontWeight={'500'} lineHeight={1}>
                    App Store
                </Typography>
            </Box >

        </Button >
    )
}

export default CustomButton
