
import { Box, Chip, Grid, Typography } from '@mui/material';

import CSS from './RiskManagementOverviewTable.module.css';

const RiskManagementOverviewTable = () => {
  const view = {
    name: "Function",
    controls: [
      {
        id: 1,
        name: "Identify",
      },
      {
        id: 2,
        name: "Protect",
      },
      {
        id: 3,
        name: "Detect",
      },
      {
        id: 4,
        name: "Respond",
      },
      {
        id: 5,
        name: "Recover",
      },
    ],
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} className={CSS["view-selection"]}>
        <Grid item xs={2}>
          <Typography variant="h5" component="span">{view.name}</Typography>
        </Grid>
        {view.controls.map((control, index) => {
          return (
            <Grid item xs={2} key={index}>
              <Typography variant="h6" component="span">{control.name}</Typography>
            </Grid>
          );
        }
        )}
      </Grid>
      <Grid container spacing={2} className={CSS["table-row"]}>
        <Grid item xs={2}>
          <b>Nist</b>
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
      </Grid>
      <Grid container spacing={2} className={CSS["table-row"]}>
        <Grid item xs={2}>
          <b>TSR</b>
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
      </Grid>
      <Grid container spacing={2} className={CSS["table-row"]}>
        <Grid item xs={2}>
          <b>Tally</b>
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
        <Grid item xs={2}>
          10.00%
        </Grid>
      </Grid>
      <Grid container spacing={2} className={CSS["table-row"]}>
        <Grid item xs={2}>
          <b>Totals</b>
        </Grid>
        <Grid item xs={2}>
          <Chip label="10.00%" color='error' />
        </Grid>
        <Grid item xs={2}>
          <Chip label="10.00%" color='warning' />
        </Grid>
        <Grid item xs={2}>
          <Chip label="10.00%" color='success' />
        </Grid>
        <Grid item xs={2}>
          <Chip label="10.00%" color='error' />
        </Grid>
        <Grid item xs={2}>
          <Chip label="10.00%" color='success' />
        </Grid>
      </Grid>
    </Box>
  )
}


export default RiskManagementOverviewTable;
