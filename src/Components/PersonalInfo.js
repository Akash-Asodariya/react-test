import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NextPlanRoundedIcon from '@mui/icons-material/NextPlanRounded';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import "../App.css"

const PersonalInfo=( { personalinfo, setPersonalInfo, handleNext, handleBack } ) =>
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
                                We’d love to have a name!
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000", fontWeight: "600", padding: "15px" }}>
                                We'll use your information ONLY to contact you about your feedback.
                            </Typography>
                        </div>

                    </CardContent>

                </CardActionArea>
                <div className='rating'>
                    <Box sx={{ gap: "35px", display: "flex" }}>
                        <TextField
                            label="Name"
                            id="outlined-multiline-static"
                            sx={{ width: "300px" }}
                            placeholder='Enter your Name'
                            value={personalinfo.name}
                            onChange={( e ) => setPersonalInfo( { ...personalinfo, name: e.target.value } )}
                        />
                        <TextField
                            label="Email"
                            id="outlined-multiline-static"
                            sx={{ width: "300px" }}
                            placeholder='Enter your email'
                            value={personalinfo.email}
                            onChange={( e ) => setPersonalInfo( { ...personalinfo, email: e.target.value } )}
                        />
                    </Box>
                    <Box sx={{ gap: "35px", display: "flex" }}>
                        <TextField
                            label="Job Title"
                            id="outlined-multiline-static"
                            sx={{ width: "300px" }}
                            placeholder='Job Title (Optional)'
                            value={personalinfo.title}
                            onChange={( e ) => setPersonalInfo( { ...personalinfo, title: e.target.value } )}
                        />
                        <TextField
                            label="Company"
                            id="outlined-multiline-static"
                            sx={{ width: "300px" }}
                            placeholder='Company (Optional)'
                            value={personalinfo.company}
                            onChange={( e ) => setPersonalInfo( { ...personalinfo, company: e.target.value } )}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Link to="/ratingreview">
                            <Button variant="contained" onClick={handleBack} startIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600", "& span": { transform: "scaleX( -1 )" } }}>Previous</Button>
                        </Link>
                        <Link to="/thankyou">
                            <Button variant="contained" onClick={handleNext} endIcon={<NextPlanRoundedIcon />} sx={{ gap: "10px", fontWeight: "600" }}>Submit</Button>
                        </Link>
                    </Box>
                </div>
            </Card>
        </div>
    )
}

export default PersonalInfo