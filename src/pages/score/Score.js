import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/page-title/PageTitle';
import ScoreSelects from '../../components/score/score-selects/ScoreSelects';
import ScoreOverviewCharts from '../../components/score/score-overview-charts/ScoreOverviewCharts';
import ScoreTable from '../../components/score/score-table/ScoreTable';

const Score = () => {
  const [assessments, setAssessments] = useState([]);
  const [assessmentId, setAssessmentId] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const assessmentId = location.state !== null ? location.state._id : null;
    setAssessmentId(assessmentId);
  }, [location.state]);


  useEffect(() => {
    fetch('http://localhost:8080/assessment/')
      .then(res => res.json())
      .then(({ assessments }) => {
        setAssessments(assessments);
      });
  }, []);

  return (
    <Layout>
      <PageTitle title="Score" />
      <ScoreSelects assessmentId={assessmentId} setAssessmentId={setAssessmentId} />
      <ScoreOverviewCharts />
      <ScoreTable assessments={assessments} assessmentId={assessmentId} />
    </Layout>
  );
}

export default Score;