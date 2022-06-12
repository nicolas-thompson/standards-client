import React, { useState } from 'react';
import { Box, Button, Grid, Stack, Stepper, Step, StepLabel, Typography } from '@mui/material';
import AssessmentControlSelect from '../assessment-control-select/AssessmentControlSelect';

import CSS from './AssessmentTargetProfile.module.css';

const steps = ["Identify", "Protect", "Detect", "Respond", "Recover"];

const AssessmentTargetProfile = ({
  currentFunctionNumber,
  currentFunctionKey,
  currentCategory,
  currentStandardKey,
  currentSubCategory,
  currentSubCategoryKey,
  showRiskAnalysisForm,
  setAssessment,
}) => {
  const [control_status, setControlStatus] = useState('n/a');
  const [controlled_confidentiality_impact, setControlledConfidentialityImpact] = useState('n/a');
  const [controlled_integrity_impact, setControlledIntegrityImpact] = useState('n/a');
  const [controlled_availability_impact, setControlledAvailabilityImpact] = useState('n/a');
  const [controlled_risk_likelihood, setControlledRiskLikelihood] = useState('n/a');

  const target_profile = {
    controls: [
      {
        id: 1,
        name: "Control Status",
      },
      {
        id: 2,
        name: "Controlled Confidentiality Impact",
      },
      {
        id: 3,
        name: "Controlled Integrity Impact",
      },
      {
        id: 4,
        name: "Controlled Availability Impact",
      },
      {
        id: 5,
        name: "Controlled Risk Likelihood",
      },
    ],
  };

  const handleControlSelectChange = (question, controlName, selectedOption) => {
    switch (controlName) {
      case "Control Status":
        setControlStatus(selectedOption);
        break;
      case "Controlled Confidentiality Impact":
        setControlledConfidentialityImpact(selectedOption);
        break;
      case "Control Priority":
        setControlledIntegrityImpact(selectedOption);
        break;
      case "Confidentiality Impact":
        setControlledAvailabilityImpact(selectedOption);
        break;
      case "Integrity Impact":
        setControlledRiskLikelihood(selectedOption);
        break;
      default:
        break;
    }
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
              ...previousAssessmentState.standards[currentStandardKey][currentSubCategoryKey],
              function: currentFunctionKey,
              category: currentCategory.category_name,
              subCategory: currentSubCategory,
              target_profile_control_status: control_status,
              controlled_confidentiality_impact: controlled_confidentiality_impact,
              controlled_integrity_impact: controlled_integrity_impact,
              controlled_availability_impact: controlled_availability_impact,
              controlled_risk_likelihood: controlled_risk_likelihood,
            },
          },
        },
      }
    });
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} className={CSS["policy-selection"]}>
          <Grid item xs={12}>
            <Typography variant="h3" component="span">Target Profile</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {target_profile.controls.map((control, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={2} className={CSS["policy-selection-form"]}>
                  {control.name}
                </Grid>
                <Grid item xs={10} className={CSS["policy-selection-form"]}>
                  <AssessmentControlSelect
                    question={target_profile.question}
                    controlName={control.name}
                    controlChangeHandler={handleControlSelectChange} />
                </Grid>
              </React.Fragment>
            );
          }
          )}
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

export default AssessmentTargetProfile;