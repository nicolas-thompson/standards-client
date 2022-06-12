import { Grid, Typography } from '@mui/material';
import AssessmentsHeader from '../assessments-header/AssessmentsHeader';
import AssessmentsRow from '../assessments-row/AssessmentsRow';

import CSS from './Assessments.module.css';

const Assessments = ({ title, assessments, newAssessment }) => {

  return (
    <Grid container spacing={0} className={CSS["assessments-overview-container"]}>
      <AssessmentsHeader title={title} newAssessment={newAssessment} />
      {
        assessments.length === 0 ?
          <Typography variant="body1">No assessments found</Typography> :
          assessments.map((assessment, index) =>
            <AssessmentsRow
              key={index}
              assessment={assessment}
              assessments={assessments}
            />
          )
      }
    </Grid>
  );
}

export default Assessments;