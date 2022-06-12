import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const AssessmentControlSelect = ({ question, controlName, controlChangeHandler }) => {
  const [value, setValue] = useState('n/a');

  const handleChange = (event) => {
    setValue(event.target.value);
    controlChangeHandler(question, controlName, event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Select</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={value}
          label="Select"
          onChange={handleChange}
          defaultValue={value}
        >
          <MenuItem value={'n/a'}>N/A</MenuItem>
          <MenuItem value={'low'}>Low</MenuItem>
          <MenuItem value={'moderate'}>Moderate</MenuItem>
          <MenuItem value={'high'}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default AssessmentControlSelect;
