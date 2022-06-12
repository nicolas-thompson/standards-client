import { useContext } from "react";
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import NewAssessmentContext from '../../../context/new-assessment-context';

import CSS from './AssessmentsHeader.module.css';

const AssessmentsHeader = ({ title }) => {

  const ctx = useContext(NewAssessmentContext);

  return (
    <>
      <Grid item xs={2}>
        <Typography variant="h4" component="span">{title}</Typography>
      </Grid>
      <Grid item xs={10} className={CSS["new-assessment"]}>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={ctx.newAssessment}>
          New Assessment
        </Button>
      </Grid>
    </>
  );
}

export default AssessmentsHeader;