import { Container, Stack } from '@mui/material';

import ScoreOverviewBarchart from '../score-overview-barchart/ScoreOverviewBarchart';
import ScoreOverviewRadarchart from '../score-overview-radarchart/ScoreOverviewRadarchart';

import CSS from './ScoreOverviewCharts.module.css';

const ScoreOverviewCharts = () => {
  return (
    <Container maxWidth={false}>
      <Stack direction="row" spacing={0} className={CSS["score-overview-charts"]}>
        <ScoreOverviewBarchart />
        <ScoreOverviewRadarchart />
      </Stack>
    </Container>
  )
}

export default ScoreOverviewCharts