import { Grid, Stack, TextField } from '@mui/material';

import CSS from './AccountPassword.module.css';

const AccountPassword = ({ password, passwordChangeHandler }) => {
  return (
    <Grid container spacing={0} className={CSS["account-password-container"]}>
      <Grid item xs={2}>
        Password
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            required
            variant="outlined"
            onChange={passwordChangeHandler}
            value={password}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AccountPassword;