import { Typography } from '@mui/material';

import CSS from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return (
    <Typography variant="h3" gutterBottom component="div" className={CSS["page-title"]}>{title}</Typography>
  );
}

export default PageTitle;