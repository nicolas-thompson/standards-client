import { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';

import CSS from './ScoreSelects.module.css';

const ScoreSelects = ({ assessmentId, setAssessmentId }) => {

  const [assessmentSelect, setAssessmentSelect] = useState('');
  const [standardSelect, setStandardSelect] = useState('');
  const [functionSelect, setFunctionSelect] = useState('');
  const [assessments, setAssessments] = useState([]);

  const handleAssessmentSelectChange = (event) => {
    setAssessmentSelect(event.target.value);
    console.log("handleAssessmentSelectChange: ", event.target.value);
    setAssessmentId(event.target.value);
  };

  const handleSandardSelectChange = (event) => {
    setStandardSelect(event.target.value);
  };

  const handleFunctionSelectChange = (event) => {
    setFunctionSelect(event.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:8080/assessment/')
      .then(res => res.json())
      .then(({ assessments }) => {
        setAssessments(assessments);
      });
  }, []);

  useEffect(() => {
    assessmentId ? setAssessmentSelect(assessmentId) : setAssessmentSelect('');
  }, [assessmentId]);

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
          {assessments.map(assessment => (
            <MenuItem key={assessment._id} value={assessment._id}>{assessment.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-standard-label">Standard</InputLabel>
        <Select
          labelId="select-standard-label"
          value={standardSelect}
          label="Standard"
          onChange={handleSandardSelectChange}
        >
          <MenuItem value={'nist'}>Nist</MenuItem>
          <MenuItem value={'some'}>Tsr</MenuItem>
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
          <MenuItem value={'identify'}>Identify</MenuItem>
          <MenuItem value={'protect'}>Protect</MenuItem>
          <MenuItem value={'detect'}>Detect</MenuItem>
          <MenuItem value={'respond'}>Respond</MenuItem>
          <MenuItem value={'recover'}>Recover</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default ScoreSelects;