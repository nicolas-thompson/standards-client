import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';

import CSS from './RiskManagementManagementSelects.module.css';

const RiskManagementManagementSelects = () => {

  const [assessmentSelect, setAssessmentSelect] = useState('all');
  const [functionSelect, setFunctionSelect] = useState('all');

  const handleAssessmentSelectChange = (event) => {
    setAssessmentSelect(event.target.value);
  };

  const handleFunctionSelectChange = (event) => {
    setFunctionSelect(event.target.value);
  };

  return (
    <Stack direction="row" spacing={2} className={CSS["stack-selects"]}>
      <FormControl fullWidth>
        <InputLabel id="select-assessment-label">Assessment</InputLabel>
        <Select
          labelId="select-assessment-label"
          value={assessmentSelect}
          label="Assessment"
          onChange={handleAssessmentSelectChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'some'}>Some</MenuItem>
          <MenuItem value={'most'}>Most</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-function-label">Function</InputLabel>
        <Select
          labelId="select-function-label"
          value={functionSelect}
          label="Function"
          onChange={handleFunctionSelectChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'some'}>Some</MenuItem>
          <MenuItem value={'most'}>Most</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-function-label">Category</InputLabel>
        <Select
          labelId="select-function-label"
          value={functionSelect}
          label="Function"
          onChange={handleFunctionSelectChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'some'}>Some</MenuItem>
          <MenuItem value={'most'}>Most</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default RiskManagementManagementSelects;

