import React, { useState } from 'react';
import { Box, Button, Grid, Stack, Stepper, Step, StepLabel, Typography } from '@mui/material';
import AssessmentControlSelect from '../assessment-control-select/AssessmentControlSelect';

import CSS from './AssessmentRiskAnalysis.module.css';

const steps = ["Identify", "Protect", "Detect", "React", "Recover"];

const AssessmentRiskAnalysis = ({
  currentFunctionNumber,
  currentFunctionKey,
  currentCategory,
  currentStandardKey,
  currentSubCategory,
  currentSubCategoryKey,
  showRiskManagementForm,
  setAssessment,
}) => {
  const [risk_goal, setRiskGoal] = useState('n/a');
  const [maximum_risk, setMaximumRisk] = useState('n/a');
  const [risk_priority, setRiskPriority] = useState('n/a');

  const risk_analysis = {
    controls: [
      {
        id: 1,
        name: "Risk Goal",
      },
      {
        id: 2,
        name: "Maximum Risk",
      },
      {
        id: 3,
        name: "Risk Priority",
      },
    ],
  };

  const handleControlSelectChange = (question, controlName, selectedOption) => {
    switch (controlName) {
      case "Risk Goal":
        setRiskGoal(selectedOption);
        break;
      case "Maximum Risk":
        setMaximumRisk(selectedOption);
        break;
      case "Risk Priority":
        setRiskPriority(selectedOption);
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
              risk_goal: risk_goal,
              maximum_risk: maximum_risk,
              risk_priority: risk_priority,
            },
          },
        },
      };
    });
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2} className={CSS["policy-selection"]}>
          <Grid item xs={12}>
            <Typography variant="h3" component="span">Risk Analysis</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {risk_analysis.controls.map((control, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={2} className={CSS["policy-selection-form"]}>
                  {control.name}
                </Grid>
                <Grid item xs={10} className={CSS["policy-selection-form"]}>
                  <AssessmentControlSelect
                    question={risk_analysis.question}
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

export default AssessmentRiskAnalysis;