import { Container, Stack, Typography } from '@mui/material';

import CSS from './Score.module.css';

const ScoreTable = ({ assessments, assessmentId }) => {

  const currentAssessment = assessments.find(assessment => assessment._id === assessmentId);

  if (currentAssessment !== undefined) {
    console.log("currentAssessment", currentAssessment);
  }

  return (
    <Container maxWidth={false}>
      <Stack spacing={2} direction="row" className={CSS["table-header"]}>
        <Typography variant="h5" component="span">Function</Typography>
        <Typography variant="h6" component="span">Score</Typography>
        <Typography variant="h6" component="span">Yes</Typography>
        <Typography variant="h6" component="span">No</Typography>
        <Typography variant="h6" component="span">NA</Typography>
        <Typography variant="h6" component="span">--</Typography>
        <Typography variant="h6" component="span">Totals</Typography>
      </Stack>
      <Stack spacing={2} direction="row" className={CSS["table-row"]}>
        <Typography variant="h5" component="span">Identify</Typography>
        <Typography variant="body1" component="span">10.00%</Typography>
        <Typography variant="body1" component="span">10</Typography>
        <Typography variant="body1" component="span">30</Typography>
        <Typography variant="body1" component="span">25</Typography>
        <Typography variant="body1" component="span">160</Typography>
        <Typography variant="body1" component="span">20</Typography>
      </Stack>
      <Stack spacing={2} direction="row" className={CSS["table-row"]}>
        <Typography variant="h5" component="span">Protect</Typography>
        <Typography variant="body1" component="span">30.00%</Typography>
        <Typography variant="body1" component="span">50</Typography>
        <Typography variant="body1" component="span">30</Typography>
        <Typography variant="body1" component="span">90</Typography>
        <Typography variant="body1" component="span">90</Typography>
        <Typography variant="body1" component="span">65</Typography>
      </Stack>
      <Stack spacing={2} direction="row" className={CSS["table-row"]}>
        <Typography variant="h5" component="span">Detect</Typography>
        <Typography variant="body1" component="span">15.00%</Typography>
        <Typography variant="body1" component="span">80</Typography>
        <Typography variant="body1" component="span">35</Typography>
        <Typography variant="body1" component="span">42</Typography>
        <Typography variant="body1" component="span">65</Typography>
        <Typography variant="body1" component="span">42</Typography>
      </Stack>
      <Stack spacing={2} direction="row" className={CSS["table-row"]}>
        <Typography variant="h5" component="span">Respond</Typography>
        <Typography variant="body1" component="span">8.00%</Typography>
        <Typography variant="body1" component="span">10</Typography>
        <Typography variant="body1" component="span">65</Typography>
        <Typography variant="body1" component="span">100</Typography>
        <Typography variant="body1" component="span">30</Typography>
        <Typography variant="body1" component="span">25</Typography>
      </Stack>
      <Stack spacing={2} direction="row" className={CSS["table-row"]}>
        <Typography variant="h5" component="span">Recover</Typography>
        <Typography variant="body1" component="span">2.00%</Typography>
        <Typography variant="body1" component="span">3</Typography>
        <Typography variant="body1" component="span">80</Typography>
        <Typography variant="body1" component="span">80</Typography>
        <Typography variant="body1" component="span">60</Typography>
        <Typography variant="body1" component="span">12</Typography>
      </Stack>
    </Container>
  )
}

export default ScoreTable;