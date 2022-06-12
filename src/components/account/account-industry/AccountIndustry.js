import { Grid, TextField } from '@mui/material';

import CSS from './AccountIndustry.module.css';

const AccountIndustry = ({ industry, industryChangeHandler }) => {

  return (
    <Grid container spacing={0} className={CSS["account-industry-container"]}>
      <Grid item xs={2}>
        Industry
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Industry"
              name="industry"
              variant="outlined"
              onChange={industryChangeHandler}
              value={industry}
            />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AccountIndustry;