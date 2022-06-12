import { Grid, TextareaAutosize } from '@mui/material';

import CSS from './AccountDescription.module.css';

const AccountDescription = ({ descriptionChangeHandler }) => {
  return (
    <Grid container spacing={0} className={CSS["account-description-container"]}>
      <Grid item xs={2}>
        Description
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={12}
              placeholder="A brief description of your organization"
              style={{ width: 100 + '%' }}
              onChange={descriptionChangeHandler}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AccountDescription;