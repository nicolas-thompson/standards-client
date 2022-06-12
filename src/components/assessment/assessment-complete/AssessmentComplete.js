import { useEffect, useContext } from 'react';
import { Box, Button, Grid, Stack, Stepper, Step, StepLabel, Typography } from '@mui/material';

import NewAssessmentContext from '../../../context/new-assessment-context';


import CSS from './AssessmentComplete.module.css';

const steps = ["Identify", "Protect", "Detect", "React", "Recover"];


const AssessmentComplete = ({ assessment, currentFunctionNumber }) => {

  const ctx = useContext(NewAssessmentContext);

  useEffect(() => {
    fetch(`http://localhost:8080/assessment/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: assessment.name,
        product_name: assessment.product_name,
        industry: assessment.industry,
        country: assessment.country,
        city: assessment.city,
        status: 'complete',
        standards: assessment.standards,
      })
    })
      .then(response => response.json())
      .then(({ createdAssessment, message }) => {
        console.log(message, createdAssessment);
      }).catch(error => {
        console.log(error);
      });
  }, [assessment]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={currentFunctionNumber}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Grid container spacing={2} className={CSS["policy-selection"]}>
          <Grid item xs={12}>
            <Stack spacing={2} >
              <Typography variant="h4" component="span">Assessment Complete</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing={2} direction="row" className={CSS['assessment-complete-actions']}>
          <Button variant="contained" onClick={ctx.showAssessments}>View Assessments</Button>
        </Stack>
      </Box>
    </>
  )
}

export default AssessmentComplete;