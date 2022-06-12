import { List, ListItem } from '@mui/material';
import { NavLink } from "react-router-dom";

import CSS from './MainNavigationMenu.module.css';

const MainNavigationMenu = () => {
  return (
    <List className={CSS["main-navigation-list"]}>
      <ListItem>
        <NavLink to="/risk-management" activeClassName={CSS.active}>Risk Management</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/score" activeClassName={CSS.active}>Score</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/assessment" activeClassName={CSS.active}>Assessment</NavLink></ListItem>
      <ListItem>
        <NavLink to="/account" activeClassName={CSS.active}>Account</NavLink>
      </ListItem>
    </List>
  );
}

export default MainNavigationMenu;