import { useState } from 'react';
import { FormControl, Grid, Stack, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import CSS from './AccountOrganization.module.css';

const AccountOrganization = ({ organizationName, organizationNameChangeHandler, organizationCountryChangeHandler, organizationCityChangeHandler }) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    organizationCountryChangeHandler(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    organizationCityChangeHandler(event.target.value);
  };

  return (
    <Grid container spacing={0} className={CSS["account-organization-container"]}>
      <Grid item xs={2}>
        Organization
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              required
              variant="outlined"
              onChange={organizationNameChangeHandler}
              value={organizationName}
            />
          </Grid>
          <Grid item xs={6}>
            <Stack direction="column" spacing={2}>
              <FormControl fullWidth>
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                  labelId="country-select-label"
                  id="select-country"
                  value={country}
                  label="Country"
                  onChange={handleCountryChange}
                >
                  <MenuItem value={'United Kingdom'}>United Kingdom</MenuItem>
                  <MenuItem value={'United States'}>United States</MenuItem>
                  <MenuItem value={'China'}>China</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="city-select-label">City</InputLabel>
                <Select
                  labelId="city-select-label"
                  id="select-city"
                  value={city}
                  label="City"
                  onChange={handleCityChange}
                >
                  <MenuItem value={'London'}>London</MenuItem>
                  <MenuItem value={'Washington'}>Washington</MenuItem>
                  <MenuItem value={'Bejing'}>Bejing</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Grid />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AccountOrganization;