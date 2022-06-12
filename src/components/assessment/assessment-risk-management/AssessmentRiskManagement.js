import React, { useState } from 'react';
import { Box, Grid, Stack, Stepper, Step, StepLabel, TextField, Typography } from '@mui/material';
import AssessmentControlSelect from '../assessment-control-select/AssessmentControlSelect';

import CSS from './AssessmentRiskManagement.module.css';

const steps = ["Identify", "Detect", "Protect", "React", "Recover"];

const AssessmentRiskManagement = ({
  currentFunctionNumber,
  currentFunctionKey,
  currentCategory,
  currentStandardKey,
  currentSubCategory,
  currentSubCategoryKey,
  setAssessment,
  goToNext,
}) => {
  const [control_start_date, setControlStartDate] = useState('n/a');
  const [control_completion_date, setControlCompletionDate] = useState('n/a');
  const [risk_owner, setRiskOwner] = useState('n/a');
  const [audit_reference, setAuditReference] = useState('n/a');
  const [assessment_reference, setAssessmentReference] = useState('n/a');
  const [risk_management_status, setRiskManagementStatus] = useState('n/a');

  const risk_management = {
    controls: [
      {
        id: 1,
        name: "Control Implementation Date",
      },
      {
        id: 2,
        name: "Risk Owner",
      },
      {
        id: 3,
        name: "Audit Reference",
      },
      {
        id: 4,
        name: "Assessment Reference",
      },
      {
        id: 5,
        name: "Risk Management Status",
      },
    ],
  };

  const handleControlStartDateChange = (event) => {
    setControlStartDate(event.target.value);
  }
  const handleControlCompletionDateChange = (event) => {
    setControlCompletionDate(event.target.value);
  }

  const handleRiskOwnerChange = (event) => {
    setRiskOwner(event.target.value);
  }

  const handleAuditReferenceChange = (event) => {
    setAuditReference(event.target.value);
  }

  const handleAssessmentReferenceChange = (event) => {
    setAssessmentReference(event.target.value);
  }

  const handleRiskManagementStatusChange = (question, controlName, selectedOption) => {
    setRiskManagementStatus(selectedOption);
  }

  const handleSaveChanges = () => {

    console.log("currentSubCategoryKey: ", currentSubCategoryKey);

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
              control_start_date: control_start_date,
              control_completion_date: control_completion_date,
              risk_owner: risk_owner,
              audit_reference: audit_reference,
              assessment_reference: assessment_reference,
              risk_management_status: risk_management_status,
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
            <Typography variant="h3" component="span">Risk Management</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} className={CSS["policy-selection-form"]}>
            Control Start Date
          </Grid>
          <Grid item xs={10} className={CSS["policy-selection-form"]}>
            <TextField type="date" name="control_start_date" onChange={handleControlStartDateChange} />
          </Grid>
          <Grid item xs={2} className={CSS["policy-selection-form"]}>
            Control Completion Date
          </Grid>
          <Grid item xs={10} className={CSS["policy-selection-form"]}>
            <TextField type="date" name="control_completion_date" onChange={handleControlCompletionDateChange} />
          </Grid>
          <Grid item xs={2} className={CSS["policy-selection-form"]}>
            Risk Owner
          </Grid>
          <Grid item xs={10} className={CSS["policy-selection-form"]}>
            <TextField name="risk_owner" onChange={handleRiskOwnerChange} />
          </Grid>
          <Grid item xs={2} className={CSS["policy-selection-form"]}>
            Audit Reference
          </Grid>
          <Grid item xs={10} className={CSS["policy-selection-form"]}>
            <TextField name="audit_reference" onChange={handleAuditReferenceChange} />
          </Grid>
          <Grid item xs={2} className={CSS["policy-selection-form"]}>
            Assessment Reference
          </Grid>
          <Grid item xs={10} className={CSS["policy-selection-form"]}>
            <TextField name="assessment_reference" onChange={handleAssessmentReferenceChange} />
          </Grid>
          <Grid item xs={2} className={CSS["policy-selection-form"]}>
            Risk Management Status
          </Grid>
          <Grid item xs={10} className={CSS["policy-selection-form"]}>
            <AssessmentControlSelect
              question={risk_management.question}
              controlName="Risk Management Status"
              controlChangeHandler={handleRiskManagementStatusChange}
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

export default AssessmentRiskManagement;