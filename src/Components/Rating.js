import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NextPlanRoundedIcon from '@mui/icons-material/NextPlanRounded';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import "../App.css"

const Ratingstar=( { rating, setRating, handleNext, handleBack } ) =>
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
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                How would you rate your experience with Test?
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ padding: "15px", display: "flex", alignItems: "center", fontWeight: "600" }}>
                                Choose one
                            </Typography>
                        </div>

                    </CardContent>

                </CardActionArea>
                <div className='rating'>
                    <Box>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={( event, newValue ) =>
                            {
                                setRating( newValue );
                            }}
                            size="large"
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Link to="/">
                            <Button variant="contained" onClick={handleBack} startIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600", "& span": { transform: "scaleX( -1 )" } }}>Previous</Button>
                        </Link>
                        <Link to="/appreview">
                            <Button variant="contained" onClick={handleNext} endIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600" }}>Next</Button>
                        </Link>
                    </Box>
                </div>
            </Card>
        </div>
    )
}

export default Ratingstar