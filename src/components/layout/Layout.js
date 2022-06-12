import { Container, Grid } from '@mui/material';
import ApplicationHeader from "../../components/application-header/ApplicationHeader";
import OrganisationSidebar from '../../components/organisation-sidebar/OrganisationSidebar';
import NavigationSidebar from '../navigation-sidebar/MainNavigationMenu';

import CSS from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={12}>
          <ApplicationHeader />
        </Grid>
        <Grid item xs={2} className={CSS["side-bar"]}>
          <OrganisationSidebar />
          <NavigationSidebar />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;