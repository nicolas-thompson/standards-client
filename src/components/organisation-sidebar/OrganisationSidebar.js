import { List, ListItem, Stack, Typography } from '@mui/material';

import avatar from '../../images/avatar.png';

import CSS from './OrganisationSidebar.module.css';

const OrganisationSidebar = () => {
  return (
    <List className={CSS["main-navigation-list"]}>
      <ListItem>
        <Stack direction="row" spacing={2}>
          <img src={avatar} alt="avatar" />
          <Typography className={CSS["organisation"]} variant="h6">Organisation</Typography>
        </Stack>
      </ListItem>
    </List>
  );
}

export default OrganisationSidebar;