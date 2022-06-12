import { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/page-title/PageTitle';
import RiskManagementOverviewSelects from '../../components/risk-management/risk-management-overview-selects/RiskManagementOverviewSelects';
import RiskManagementManagementSelects from '../../components/risk-management/risk-management-management-selects/RiskManagementManagementSelects';
import RiskManagementGantt from '../../components/risk-management/risk-management-gantt/RiskManagementGantt';
import RiskManagementTasks from '../../components/risk-management/risk-management-tasks/RiskManagementTasks';
import RiskManagementOverviewCharts from '../../components/risk-management/risk-management-overview-charts/RiskManagementOverviewCharts';
import RiskManagementOverviewTable from '../../components/risk-management/risk-management-overview-table/RiskManagementOverviewTable';

const RiskManagement = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Layout>
      <PageTitle title="Risk Management" />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Overview" />
            <Tab label="Management" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <RiskManagementOverviewSelects />
          <RiskManagementOverviewCharts />
          <RiskManagementOverviewTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RiskManagementManagementSelects />
          <RiskManagementGantt />
          <RiskManagementTasks />
        </TabPanel>
      </Box>
    </Layout>

  );
}

export default RiskManagement;