import { Grid, Button } from '@mui/material';

import CSS from './AccountEditProfile.module.css';

const AccountEditProfile = () => {

  return (
    <Grid container spacing={0} className={CSS["account-edit-profile-container"]}>
      <Grid item xs={2}>
        <Button variant="contained" color="primary" type="submit">Edit Profile</Button>
      </Grid>
      <Grid item xs={10}></Grid>
    </Grid>
  );
}

export default AccountEditProfile;