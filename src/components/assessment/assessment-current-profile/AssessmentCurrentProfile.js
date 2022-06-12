
import React, { useState } from 'react';
import { Box, Button, Grid, Stack, Stepper, Step, StepLabel, Typography, TextareaAutosize } from '@mui/material';
import AssessmentControlSelect from '../assessment-control-select/AssessmentControlSelect';

import CSS from './AssessmentCurrentProfile.module.css';

const steps = ["Identify", "Protect", "Detect", "React", "Recover"];

const AssessmentCurrentProfile = ({
  currentFunctionNumber,
  currentFunctionKey,
  currentCategory,
  currentStandardKey,
  currentSubCategory,
  currentSubCategoryKey,
  setAssessment,
}) => {
  const [control_status, setControlStatus] = useState('n/a');
  const [control_scale, setControlScale] = useState('n/a');
  const [control_priority, setControlPriority] = useState('n/a');
  const [confidentiality_impact, setConfidentialityImpact] = useState('n/a');
  const [integrity_impact, setIntegrityImpact] = useState('n/a');
  const [availability_impact, setAvailabilityImpact] = useState('n/a');
  const [risk_likelihood, setRiskLikelihood] = useState('n/a');
  const [risk_strategy, setRiskStrategy] = useState('n/a');
  const [risk_description, setRiskDescription] = useState('n/a');
  const [control_description, setControlDescription] = useState('n/a');

  const current_profile = {
    controls: [
      {
        id: 1,
        name: "Control Status",
      },
      {
        id: 2,
        name: "Control Scale",
      },
      {
        id: 3,
        name: "Control Priority",
      },
      {
        id: 4,
        name: "Confidentiality Impact",
      },
      {
        id: 5,
        name: "Integrity Impact",
      },
      {
        id: 6,
        name: "Availability Impact",
      },
      {
        id: 7,
        name: "Risk Likelihood",
      },
      {
        id: 8,
        name: "Risk Strategy",
      },
    ],
  };

  const handleControlSelectChange = (question, controlName, selectedOption) => {

    switch (controlName) {
      case "Control Status":
        setControlStatus(selectedOption);
        break;
      case "Control Scale":
        setControlScale(selectedOption);
        break;
      case "Control Priority":
        setControlPriority(selectedOption);
        break;
      case "Confidentiality Impact":
        setConfidentialityImpact(selectedOption);
        break;
      case "Integrity Impact":
        setIntegrityImpact(selectedOption);
        break;
      case "Availability Impact":
        setAvailabilityImpact(selectedOption);
        break;
      case "Risk Likelihood":
        setRiskLikelihood(selectedOption);
        break;
      case "Risk Strategy":
        setRiskStrategy(selectedOption);
        break;
      default:
        break;
    }
  }

  const handleRiskDescriptionChange = (riskDescription) => {
    setRiskDescription(riskDescription);
  }

  const handleControlDescriptionChange = (controlDescription) => {
    setControlDescription(controlDescription);
  }

  const handleSaveChanges = () => {
    setAssessment((previousAssessmentState) => {
      return {
        ...previousAssessmentState,
        standards: {
          ...previousAssessmentState.standards,
          [currentStandardKey]: {
            ...previousAssessmentState.standards[currentStandardKey],
            [currentSubCategoryKey]: {
              function: currentFunctionKey,
              category: currentCategory.category_name,
              subCategory: currentSubCategory,
              current_profile_control_status: control_status,
              control_scale: control_scale,
              control_priority: control_priority,
              confidentiality_impact: confidentiality_impact,
              integrity_impact: integrity_impact,
              availability_impact: availability_impact,
              risk_likelihood: risk_likelihood,
              risk_strategy: risk_strategy,
              risk_description: risk_description,
              control_description: control_description,
            },
          },
        },
      }
    });
  }

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
              <Typography variant="h6" component="span">Function: {currentFunctionKey}</Typography>
              <Typography variant="h5" component="span">Category: {currentCategory.category_name}</Typography>
              <Typography variant="h4" component="span">Subcategory: {currentSubCategory}</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={CSS["policy-selection"]}>
          <Grid item xs={12}>
            <Typography variant="h3" component="span">Current Profile</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {current_profile.controls.map((control, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={2} className={CSS["policy-selection-form"]}>
                  {control.name}
                </Grid>
                <Grid item xs={10} className={CSS["policy-selection-form"]}>
                  <AssessmentControlSelect
                    question={current_profile.question}
                    controlName={control.name}
                    controlChangeHandler={handleControlSelectChange} />
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
        <Grid container spacing={2} className={CSS["policy-selection-form"]}>
          <Grid item xs={2}>
            {"Risk description"}
          </Grid>
          <Grid item xs={10}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={12}
              style={{ width: 100 + '%' }}
              onChange={handleRiskDescriptionChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={CSS["policy-selection-form"]}>
          <Grid item xs={2}>
            {"Control description"}
          </Grid>
          <Grid item xs={10}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={12}
              style={{ width: 100 + '%' }}
              onChange={handleControlDescriptionChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Stack
        sx={{
          width: '100%',
          height: 100,
          justifyContent: 'right',
          mt: 3,
        }}
        direction="row"
        justifyContent="right"
        alignItems="baseline"
        spacing={12}
      >
      </Stack>
    </>
  );
}

export default AssessmentCurrentProfile;