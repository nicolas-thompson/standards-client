import { Box, Container, Stack, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";
import icon from '../../images/icon.png';

import CSS from './Cover.module.css';

const Cover = () => {
  return (
    <Container maxWidth="lg" className={CSS["cover-container"]}>
      <Stack direction="row" spacing={2} alignItems="center" className={CSS["vertical-height"]}>
        <img src={icon} alt="icon" width="240px" height="240px" />
        <Box>
          <NavLink to="/risk-management">
            <Typography variant="h1" component="div" gutterBottom>
              Scorecard
            </Typography>
            <Typography variant="h2" gutterBottom component="div">
              Weaverlabs
            </Typography>
          </NavLink>
        </Box>
      </Stack>
    </Container>
  );
}

export default Cover;