import { Container, Stack } from '@mui/material';
import LoginForm from '../../components/login-form/LoginForm';

import CSS from './Login.module.css';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Stack direction="row" spacing={2} alignItems="center" className={CSS["vertical-height"]}>
        <LoginForm />
      </Stack>
    </Container>
  );
}

export default Login;