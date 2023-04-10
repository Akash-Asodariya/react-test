import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import "../App.css"

const ThankYou=( { rating, appReview, ratingReview, personalinfo } ) =>
{

    return (
        <div>
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
                        <div>
                            <Typography gutterBottom variant="h4" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                Thanks for your feedback!
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                Thank you for taking the time to respond. We appreciate your input.
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                <i class="fa-solid fa-envelope"></i>
                                {personalinfo.email}
                            </Typography>
                        </div>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                Rating : {rating}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                AppReview : {appReview}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                Rating Review: {ratingReview}
                            </Typography>
                        </Box>

                    </CardContent>

                </CardActionArea>
            </Card>
        </div>
    )
}

export default ThankYou