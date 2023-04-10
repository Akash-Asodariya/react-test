import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NextPlanRoundedIcon from '@mui/icons-material/NextPlanRounded';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Container, Grid, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import "../App.css"

const RatingReview=( { setRatingReview, ratingReview, rating, handleNext, handleBack } ) =>
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
                            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Container>
                                    {rating===0&&<Typography variant="h5" component="h2" > Poor ! </Typography>}
                                    {rating===1&&<Typography variant="h5" component="h2" > Poor ! </Typography>}
                                    {rating===2&&<Typography variant="h5" component="h2" > Ops ! </Typography>}
                                    {rating===3&&<Typography variant="h5" component="h2" > Good ! </Typography>}
                                    {rating===4&&<Typography variant="h5" component="h2" > Fantastic ! </Typography>}
                                    {rating===5&&<Typography variant="h5" component="h2" > Excellent ! </Typography>}

                                    {/* <Typography variant="h4" component="h2" sx={{ color: '#cfe8fc' }}> We're glad  you had a great experience with us.  </Typography> */}
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                        Why did you give a rating of {rating}
                                    </Typography>
                                </Container>
                            </Grid>

                        </div>

                    </CardContent>

                </CardActionArea>
                <div className='rating'>
                    <Box>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            sx={{ width: "500px" }}
                            value={ratingReview}
                            onChange={( e ) => setRatingReview( e.target.value )}
                            placeholder='type your response. Try to share as much as you can!'
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Link to="/appreview">
                            <Button variant="contained" onClick={handleBack} startIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600", "& span": { transform: "scaleX( -1 )" } }}>Previous</Button>
                        </Link>
                        <Link to="/personalinfo">
                            <Button variant="contained" onClick={handleNext} endIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600" }}>Next</Button>
                        </Link>
                    </Box>
                </div>
            </Card>
        </div>
    )
}

export default RatingReview