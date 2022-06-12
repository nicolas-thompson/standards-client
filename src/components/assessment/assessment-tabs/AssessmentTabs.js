import { useState, useEffect } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Assessments from '../assessments/Assessments';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const AssessmentTabs = () => {
  const [value, setValue] = React.useState(0);
  const [assessments, setAssessments] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    fetch('http://localhost:8080/assessment/')
      .then(res => res.json())
      .then(({ assessments }) => {
        setAssessments(assessments);
      });
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
          <Tab label="In-Progress" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Assessments title="All" assessments={assessments} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Assessments title="Completed" assessments={assessments} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Assessments title="In-Progress" assessments={assessments} />
      </TabPanel>
    </Box>
  );
}

export default AssessmentTabs;
