import { Grid, Button } from '@mui/material';

import CSS from './AssessmentCreateCreateAssessment.module.css';

const AssessmentCreateCreateAssessment = () => {

  return (
    <Grid container spacing={0} className={CSS["assessment-create-create-assessment-container"]}>
      <Grid item xs={2}>
        <Button variant="contained" color="primary" type="submit">Create Assessment</Button>
      </Grid>
      <Grid item xs={10}></Grid>
    </Grid>
  );
}

export default AssessmentCreateCreateAssessment;