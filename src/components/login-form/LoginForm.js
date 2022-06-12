import { Box, TextField } from '@mui/material';

const LoginForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="username-outlined-basic" label="Username" variant="outlined" />
      <TextField id="password-outlined-basic" label="Password" variant="outlined" />
    </Box>
  );
}

export default LoginForm;
