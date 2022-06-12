
import { Stack, Typography } from '@mui/material';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

import CSS from './RiskManagementOverviewRadarchart.module.css';

const data = [
  {
    subject: "Protect",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Identify",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Recover",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Respond",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Detect",
    A: 85,
    B: 90,
    fullMark: 150
  },
];

const RiskManagementOverviewRadarchart = () => {
  return (
    <Stack direction="row" spacing={0}>
      <Typography variant="h6" component="span" className={CSS["risk-management-overview-radarchart-title"]}>Risk Profiles</Typography>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </Stack>
  );
}


export default RiskManagementOverviewRadarchart;