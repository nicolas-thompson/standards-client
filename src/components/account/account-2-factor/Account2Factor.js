import { FormControlLabel, Grid, Switch } from '@mui/material';

import CSS from './Account2Factor.module.css';

const Account2Factor = () => {

  return (
    <Grid container spacing={0} className={CSS["account-2factor-container"]}>
      <Grid item xs={2}>
        2 Factor
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Account2Factor;