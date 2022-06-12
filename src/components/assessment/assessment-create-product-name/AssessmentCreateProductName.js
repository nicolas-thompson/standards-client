import { Grid, Stack, TextField } from '@mui/material';

import CSS from './AssessmentCreateProductName.module.css';

const AssessmentCreateProductName = ({ productNameChangeHandler }) => {
  return (
    <Grid container spacing={0} className={CSS["assessment-create-product-name-container"]}>
      <Grid item xs={2}>
        Product Name
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Product Name"
            name="product_name"
            required
            variant="outlined"
            onChange={productNameChangeHandler}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default AssessmentCreateProductName;
