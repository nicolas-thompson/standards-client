import { Box, Chip, Grid, Link, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CSS from './RiskManagementTasks.module.css';

const RiskManagementTasks = () => {
  return (
    <Grid container spacing={0} className={CSS["assessments-overview-container"]}>
      <Grid item xs={12} className={CSS["risk-tasks-title"]}>
        <Typography variant="h4" component="span">Risk Tasks</Typography>
      </Grid>
      <>
        <Box sx={{
          width: '100%',
          height: 3 + "rem"
        }} />
        <Grid item xs={2} className={CSS["task-row"]}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" component="span">Task Name</Typography>
            <Typography variant="body2" component="span">Task Description</Typography>
          </Stack>
        </Grid>
        <Grid item xs={10} className={CSS["view-assessment"]}>
          <Stack direction="row" spacing={2}>
            <Chip label="task status" color="warning" />
            <Link href="#" >View <ArrowForwardIosIcon /></Link>
          </Stack>
        </Grid>
        <Grid item xs={2} className={CSS["task-row"]}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" component="span">Task Name</Typography>
            <Typography variant="body2" component="span">Task Description</Typography>
          </Stack>
        </Grid>
        <Grid item xs={10} className={CSS["view-assessment"]}>
          <Stack direction="row" spacing={2}>
            <Chip label="task status" color="success" />
            <Link href="#" >View <ArrowForwardIosIcon /></Link>
          </Stack>
        </Grid>
        <Grid item xs={2} className={CSS["task-row"]}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" component="span">Task Name</Typography>
            <Typography variant="body2" component="span">Task Description</Typography>
          </Stack>
        </Grid>
        <Grid item xs={10} className={CSS["view-assessment"]}>
          <Stack direction="row" spacing={2}>
            <Chip label="task status" color="error" />
            <Link href="#" >View <ArrowForwardIosIcon /></Link>
          </Stack>
        </Grid>
        <Grid item xs={2} className={CSS["task-row"]}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" component="span">Task Name</Typography>
            <Typography variant="body2" component="span">Task Description</Typography>
          </Stack>
        </Grid>
        <Grid item xs={10} className={CSS["view-assessment"]}>
          <Stack direction="row" spacing={2}>
            <Chip label="task status" color="success" />
            <Link href="#" >View <ArrowForwardIosIcon /></Link>
          </Stack>
        </Grid>
      </>
    </Grid>
  )
}

export default RiskManagementTasks;