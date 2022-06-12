import { Stack } from '@mui/material';

import RiskManagementOverviewLinechart from '../risk-management-overview-linechart/RiskManagementOverviewLinechart';
import RiskManagementOverviewRadarchart from '../risk-management-overview-radarchart/RiskManagementOverviewRadarchart';

import CSS from './RiskManagemtOverviewCharts.module.css';

const RiskManagementOverviewCharts = () => {
  return (
    <Stack direction="row" spacing={0} className={CSS["risk-management-overview-charts"]}>
      <RiskManagementOverviewRadarchart />
      <RiskManagementOverviewLinechart />
    </Stack>
  )
}

export default RiskManagementOverviewCharts