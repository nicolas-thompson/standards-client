import { Stack } from '@mui/material';

import logo from '../../images/logo.png';

import CSS from './ApplicationHeader.module.css';

const ApplicationHeader = () => {
  return (
    <header className={CSS["application-header"]}>
      <Stack direction="row" spacing={2} alignItems="center" >
        <div className="application-header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="application-header__title">
          <h1>Weaver Labs</h1>
        </div>
      </Stack>
    </header>
  );
}

export default ApplicationHeader;