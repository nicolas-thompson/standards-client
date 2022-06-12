import { Box, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import CSS from './AssessmentCreateIndustry.module.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const industries = [
  'Accounting',
  'Advertising',
  'Aerospace',
  'Agriculture',
  'Automotive',
  'Banking',
  'Biotechnology',
  'Broadcasting',
  'Business Services',
  'Chemicals',
  'Communications',
  'Computer Hardware',
  'Computer Software',
  'Consulting',
  'Construction',
  'Consumer Electronics',
  'Consumer Goods',
  'Cosmetics',
  'Defense',
  'Education',
  'Electronics',
  'Energy',
  'Entertainment',
  'Environmental',
  'Finance',
  'Food & Beverage',
  'Government',
  'Healthcare',
  'Hospitality',
  'Insurance',
  'Machinery',
  'Manufacturing',
  'Media',
  'Not For Profit',
  'Recreation',
  'Retail',
  'Shipping',
  'Technology',
  'Telecommunications',
  'Transportation',
  'Utilities',
];

function getStyles(name, industryName, theme) {
  return {
    fontWeight:
      industryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AssessmentCreateIndustry = ({ industryChangeHandler }) => {

  const theme = useTheme();
  const [industryName, setIndustryName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setIndustryName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <Grid container spacing={0} className={CSS["assessment-create-industry-container"]}>
      <Grid item xs={2}>
        Industry
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ m: 0, width: 300 }}>
            <InputLabel id="multiple-chip-label">Industry</InputLabel>
            <Select
              labelId="multiple-chip-label"
              id="multiple-chip"
              multiple
              value={industryName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Industry" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {industries.map((industry) => (
                <MenuItem
                  key={industry}
                  value={industry}
                  style={getStyles(industry, industryName, theme)}
                >
                  {industry}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AssessmentCreateIndustry;
