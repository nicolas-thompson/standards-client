import { Chip, Box, Grid, Typography, Stack } from '@mui/material';
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CSS from './AssessmentsRow.module.css';

const AssessmentsRow = ({ assessment }) => {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: 3 + "rem"
      }} />
      <Grid item xs={2}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" component="span">{assessment.name}</Typography>
          <Typography variant="body2" component="span">Organization name</Typography>
        </Stack>
      </Grid>
      <Grid item xs={10} className={CSS["view-assessment"]}>
        <Stack direction="row" spacing={2}>
          <Chip label={assessment.status} color={(assessment.status === "complete") ? "success" : (assessment.status === "in-progress") ? "warning" : "error"} />
          <NavLink className={CSS["view-assessment-link"]} to={{ pathname: '/score', state: { _id: assessment._id } }}>View <ArrowForwardIosIcon /></NavLink>
        </Stack>
      </Grid>
    </>
  )
}

export default AssessmentsRow;