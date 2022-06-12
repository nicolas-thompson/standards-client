
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/page-title/PageTitle';
import AssessmentTabs from '../../components/assessment/assessment-tabs/AssessmentTabs';
import NewAssessmentContext from '../../context/new-assessment-context';
import AssessmentNew from '../../components/assessment/assessment-new/AssessmentNew';

const Assessment = () => {

  const [isNewAssessment, setIsNewAssessment] = useState(false);

  const newAssessment = () => {
    setIsNewAssessment(true);
  }

  const showAssessments = () => {
    setIsNewAssessment(false);
  }

  return (
    <Layout>
      <NewAssessmentContext.Provider value={{ newAssessment, showAssessments }}>
        <PageTitle title={isNewAssessment ? "New Assessment" : "Assessment"} />
        {isNewAssessment === false && <AssessmentTabs />}
        {isNewAssessment === true && <AssessmentNew />}
      </NewAssessmentContext.Provider>
    </Layout>
  );
}

export default Assessment;