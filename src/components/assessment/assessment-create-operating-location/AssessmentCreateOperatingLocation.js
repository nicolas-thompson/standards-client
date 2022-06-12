import { useState } from "react";
import { Grid, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import CSS from './AssessmentCreateOperatingLocation.module.css';

const AssessmentCreateOperatingLocation = ({ countryChangeHandler, cityChangeHandler }) => {

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    countryChangeHandler(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    cityChangeHandler(event.target.value);
  };


  return (
    <Grid container spacing={0} className={CSS["assessment-create-operating-location-container"]}>
      <Grid item xs={2}>
        Operating Location
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
              labelId="country-select-label"
              id="select-country"
              value={country}
              label="Country"
              onChange={handleCountryChange}
              defaultValue={"United Kingdom"}
            >
              <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
              <MenuItem value={"United States"}>United States</MenuItem>
              <MenuItem value={"China"}>China</MenuItem>
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
              defaultValue="London"
            >
              <MenuItem value={"London"}>London</MenuItem>
              <MenuItem value={"Washington"}>Washington</MenuItem>
              <MenuItem value={"Bejing"}>Bejing</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AssessmentCreateOperatingLocation;
