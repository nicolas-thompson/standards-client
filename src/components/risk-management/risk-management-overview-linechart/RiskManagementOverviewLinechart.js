
import { Stack, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import CSS from './RiskManagementOverviewLinechart.module.css';

const data = [
  {
    name: 'Low',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'High',
    uv: 18,
    pv: 48,
    amt: 21,
  },
];

const OverviewLinechart = () => {
  return (
    <Stack direction="row" spacing={0}>
      <Typography variant="h6" className={CSS["risk-management-overview-linechart-title"]}>Risk  Impact</Typography>
      <LineChart
        width={600}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}

        <Line dataKey="pv" stackId="a" fill="#F3F4F6" />
      </LineChart>
    </Stack>
  )
}

export default OverviewLinechart;