import { Grid, Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import CSS from './AssessmentCreateStandardsFilter.module.css';

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

const standards = [
  'Nist',
  'TSR',
];

function getStyles(standard, standardName, theme) {
  return {
    fontWeight:
      standardName.indexOf(standard) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AssessmentCreateStandardsFilter = ({ standardsFilterChangeHandler }) => {

  const theme = useTheme();
  const [standardName, setStandardName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStandardName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Grid container spacing={0} className={CSS["assessment-create-standards-filter-container"]}>
      <Grid item xs={2}>
        Standards Filter
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ m: 0, width: 300 }}>
            <InputLabel id="multiple-chip-label">Standard</InputLabel>
            <Select
              labelId="multiple-chip-label"
              id="multiple-chip"
              multiple
              value={standardName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Standard" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {standards.map((standard) => (
                <MenuItem
                  key={standard}
                  value={standard}
                  style={getStyles(standard, standardName, theme)}
                >
                  {standard}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AssessmentCreateStandardsFilter;
