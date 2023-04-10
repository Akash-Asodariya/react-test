import React, { useState } from 'react';
import './App.css';
import { Welcome } from './Components/Welcome';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Rating from './Components/Rating';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppReview from './Components/AppReview';
import RatingReview from "./Components/RatingReview";
import PersonalInfo from "./Components/PersonalInfo"
import ThankYou from "./Components/ThankYou"
import { Avatar, Box, Typography } from '@mui/material';
import { Padding } from '@mui/icons-material';


function App ()
{
  const [ activeStep, setActiveStep ]=useState( 0 );
  const [ skipped, setSkipped ]=useState( new Set() );
  const [ rating, setRating ]=useState( 0 )
  const [ appReview, setAppReview ]=useState( 0 )
  const [ ratingReview, setRatingReview ]=useState( "" )
  const [ personalinfo, setPersonalInfo ]=useState( 0 )

  const steps=[
    'Welcome',
    'Rating',
    'Choose app',
    'Rating review',
    'Personal info',
    'Thank You',
  ];

  const isStepOptional=( step ) =>
  {
    return step===1;
  };

  const isStepSkipped=( step ) =>
  {
    return skipped.has( step );
  };

  const handleNext=() =>
  {
    let newSkipped=skipped;
    if ( isStepSkipped( activeStep ) )
    {
      newSkipped=new Set( newSkipped.values() );
      newSkipped.delete( activeStep );
    }

    setActiveStep( ( prevActiveStep ) => prevActiveStep+1 );
    setSkipped( newSkipped );
    console.log( activeStep, "activeStep" )
  };

  const handleBack=() =>
  {
    setActiveStep( ( prevActiveStep ) => prevActiveStep-1 );
  };

  return (
    <div className="App">
      <Box sx={{ Padding: "60px" }}>
        <img className='logo' variant="square" src="https://img.logoipsum.com/289.svg" />
      </Box>

      <Stepper activeStep={activeStep}>
        {steps.map( ( label, index ) =>
        {
          const stepProps={};
          const labelProps={};
          if ( isStepOptional( index ) )
          {
            labelProps.optional=(
              <Typography variant="caption">Optional</Typography>
            );
          }
          if ( isStepSkipped( index ) )
          {
            stepProps.completed=false;
          }
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        } )}
      </Stepper>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome handleNext={handleNext} handleBack={handleBack} />} />
          <Route path="/rating" element={<Rating rating={rating} setRating={setRating} handleNext={handleNext} handleBack={handleBack} />} />
          <Route path="/appreview" element={<AppReview appReview={appReview} setAppReview={setAppReview} handleNext={handleNext} handleBack={handleBack} />} />
          <Route path="/ratingreview" element={<RatingReview rating={rating} ratingReview={ratingReview} setRatingReview={setRatingReview} handleNext={handleNext} handleBack={handleBack} />} />
          <Route path="/personalinfo" element={<PersonalInfo personalinfo={personalinfo} setPersonalInfo={setPersonalInfo} handleNext={handleNext} handleBack={handleBack} />} />
          <Route path="/thankyou" element={<ThankYou personalinfo={personalinfo} ratingReview={ratingReview} appReview={appReview} rating={rating} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
