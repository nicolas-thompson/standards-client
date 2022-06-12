import { Grid, Stack, TextField } from '@mui/material';

import CSS from './AssessmentCreateAssessmentName.module.css';

const AssessmentCreateAssessmentName = ({ assessmentNameChangeHandler }) => {
  return (
    <Grid container spacing={0} className={CSS["assessment-create-assessment-name-container"]}>
      <Grid item xs={2}>
        Assessment Name
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Assessment Name"
            name="assessment_name"
            required
            variant="outlined"
            onChange={assessmentNameChangeHandler}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AssessmentCreateAssessmentName;
