import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NextPlanRoundedIcon from '@mui/icons-material/NextPlanRounded';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from "react-router-dom";
import "../App.css"

const AppReview=( { appReview, setAppReview, handleNext, handleBack } ) =>
{
    const navigate=useNavigate();
    const handleClick=( e ) =>
    {
        setAppReview( e.target.name )
        handleNext()
        navigate( "/ratingreview" );

    }

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
                                Fantastic!
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ padding: "15px", display: "flex", alignItems: "center", fontWeight: "600" }}>
                                Please tell us more about your experience online!
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ padding: "15px", display: "flex", alignItems: "center", fontWeight: "600" }}>
                                this will help other people find us based on your experience.
                            </Typography>
                        </div>

                    </CardContent>

                </CardActionArea>

                <Box sx={{ margin: "50px !important" }}>
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                        <Container maxWidth="sm" sx={{ height: '65%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "15px", height: 'fit-content' }}>
                                <Button variant="contained" name="Review on Google" endIcon={<GoogleIcon />} sx={{ background: "#fff", color: "#000", gap: "10px" }} onClick={handleClick}>Review on Google</Button>
                                <Button variant="contained" name="Review on Facebook" endIcon={<FacebookIcon />} sx={{ background: "#4867aa", color: "#000", gap: "10px" }} onClick={handleClick}>Review on Facebook</Button>
                                <Button variant="contained" name="Share on Facebook" endIcon={<FacebookIcon />} sx={{ background: "#4867aa", color: "#000", gap: "10px" }} onClick={handleClick}>Share on Facebook</Button>
                                <Button variant="contained" name="Tweet" sx={{ background: "#1da1f2", color: "#000", gap: "10px" }} onClick={handleClick}>Tweet
                                    <i class="fa-brands fa-twitter" />
                                </Button>
                            </div>
                        </Container>
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Link to="/rating">
                        <Button variant="contained" onClick={handleBack} startIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600", "& span": { transform: "scaleX( -1 )" } }}>Previous</Button>
                    </Link>
                    <Link to="/ratingreview">
                        <Button variant="contained" onClick={handleNext} endIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600" }}>Next</Button>
                    </Link>
                </Box>
            </Card>
        </div>
    )
}

export default AppReview