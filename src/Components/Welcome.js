import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NextPlanRoundedIcon from '@mui/icons-material/NextPlanRounded';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { Link } from "react-router-dom";
import "../App.css"

export const Welcome=( { handleNext } ) =>
{
    return (
        <div className='welcome_main'>
            <Card sx={{ background: "linear-gradient(135deg,rgba(0,0,0,.16) -16%,rgba(0,0,0,.35) 200%)", padding: "35px 150px 35px 150px" }}>
                <CardActionArea sx={{
                    "&.MuiCardActionArea-root:hover": {
                        background: "transparent"
                    }
                }}>
                    <CardContent sx={{
                        padding: "0", display: "flex",
                        flexDirection: "column",
                        alignItems: "start"
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                            Welcome!
                        </Typography>
                        <Chip label="We'd love to know how we're doing." color="primary" variant="outlined" sx={{ padding: "15px", fontWeight: "600", fontSize: "15px" }} />
                        <Typography variant="body1" color="text.secondary" sx={{ padding: "15px", display: "flex", alignItems: "center", fontWeight: "600" }}>
                            <ChatBubbleOutlineRoundedIcon />
                            Tell us about your experience or leave a review. You can also share your experience with friends online.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Link to="/rating">
                    <Button variant="contained" onClick={handleNext} endIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600" }}>Let's Go</Button>
                </Link>

            </Card>
        </div>
    )
}
