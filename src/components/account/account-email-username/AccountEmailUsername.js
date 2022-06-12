import { Grid, Stack, TextField } from '@mui/material';

import avatar from '../../../images/avatar.png';

import CSS from './AccountEmailUsername.module.css';

const AccountEmailUsername = ({ email, emailChangeHandler, username, usernameChangeHandler }) => {
  return (
    <Grid container spacing={0} className={CSS["account-email-username-container"]}>
      <Grid item xs={2}>
        Email and Username
      </Grid>
      <Grid item xs={10}>
        <img src={avatar} alt="avatar" />
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            required
            variant="outlined"
            onChange={emailChangeHandler}
            value={email}
          />
          <TextField
            fullWidth
            label="Username (Optional)"
            name="username"
            variant="outlined"
            onChange={usernameChangeHandler}
            value={username}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AccountEmailUsername;