
import { Stack, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import CSS from './OverviewBarchart.module.css';

const data = [
  {
    name: 'ID',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'PR',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'DE',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'RS',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: 'RC',
    uv: 18,
    pv: 48,
    amt: 21,
  },
];

const OverviewBarchart = () => {
  return (
    <Stack direction="row" spacing={0}>
      <Typography variant="h6" className={CSS["overview-barchart-title"]}>Overview</Typography>
      <BarChart
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
        <Bar dataKey="uv" stackId="a" fill="#D1D5DB" />
        <Bar dataKey="pv" stackId="a" fill="#F3F4F6" />
      </BarChart>
    </Stack>
  )
}

export default OverviewBarchart;