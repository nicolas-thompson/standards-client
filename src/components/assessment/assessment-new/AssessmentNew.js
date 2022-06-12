import { useState, useEffect } from 'react';
import { Container } from '@mui/material';

import AssessmentCreate from '../assessment-create/AssessmentCreate';
import AssessmentCurrentProfile from '../assessment-current-profile/AssessmentCurrentProfile';
import AssessmentTargetProfile from '../assessment-target-profile/AssessmentTargetProfile';
import AssessmentRiskAnalysis from '../assessment-risk-analysis/AssessmentRiskAnalysis';
import AssessmentRiskManagement from '../assessment-risk-management/AssessmentRiskManagement';
import AssessmentComplete from '../assessment-complete/AssessmentComplete';

const AssessmentNew = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [showAssesmentCreateForm, setShowAssessmentCreateForm] = useState(true);
  const [showCurrentProfileForm, setShowCurrentProfileForm] = useState(false);
  const [showTargetProfileForm, setShowTargetProfileForm] = useState(false);
  const [showRiskAnalysisForm, setShowRiskAnalysisForm] = useState(false);
  const [showRiskManagementForm, setShowRiskManagementForm] = useState(false);

  const [functions, setFunctions] = useState({});
  const [functionKeys, setFunctionKeys] = useState([]);
  const [currentFunction, setCurrentFunction] = useState({});
  const [currentFunctionKey, setCurrentFunctionKey] = useState('');
  const [currentFunctionNumber, setSetCurrentFunctionNumber] = useState(0);

  const [currentCategory, setCurrentCategory] = useState({});
  const [currentCategoryKeys, setCurrentCategoryKeys] = useState([]);
  const [currentCategoryKey, setCurrentCategoryKey] = useState('');
  const [currentCategoryNumber, setCurrentCategoryNumber] = useState(0);

  const [currentStandards, setCurrentStandards] = useState({});
  const [currentStandardKeys, setCurrentStandardsKeys] = useState([]);
  const [currentStandardKey, setCurrentStandardKey] = useState('');
  const [currentStandard, setCurrentStandard] = useState({});
  const [currentStandardNumber, setCurrentStandardNumber] = useState(0);


  const [currentSubCategories, setCurrentSubCategories] = useState({});
  const [currentSubCategoryKeys, setCurrentSubCategoryKeys] = useState([]);
  const [currentSubCategory, setCurrentSubCategory] = useState({});
  const [currentSubCategoryKey, setCurrentSubCategoryKey] = useState('');
  const [currentSubCategoryNumber, setCurrentSubCategoryNumber] = useState(0);

  const [showAssessmentComplete, setShowAssessmentComplete] = useState(false);

  console.log("currentFunctionNumber: ", currentFunctionNumber);
  console.log("currentCategoryNumber: ", currentCategoryNumber);
  console.log("currentStandardNumber: ", currentStandardNumber);
  console.log("currentSubCategoryNumber: ", currentSubCategoryNumber);

  const [assessment, setAssessment] = useState({
    name: '',
    product_name: '',
    industry: [],
    country: '',
    city: '',
    filters: [],
    status: [],
    standards: {},
  });

  console.log("assessment: ", assessment);

  useEffect(() => {
    fetch('http://localhost:8080/csf_core_risk', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(({ csf_core_risk }) => {
        delete csf_core_risk[0]._id;
        setFunctions(csf_core_risk[0]);
        setFunctionKeys(Object.keys(csf_core_risk[0]).filter((key) => (key !== '_id')));
      }
      ).catch(error => {
        console.log(error);
      }
      );
  }, []);

  useEffect(() => {
    functionKeys.forEach((key, index) => {
      if (index === currentFunctionNumber) {
        setCurrentFunctionKey(key);
        setCurrentFunction(functions[key]);
      }
    });
  }, [functions, functionKeys, currentFunctionNumber]);

  useEffect(() => {
    const currentCategoryKeys = Object.keys(currentFunction);
    setCurrentCategoryKeys(currentCategoryKeys);
    currentCategoryKeys.forEach((key, index) => {
      if (index === currentCategoryNumber) {
        setCurrentCategoryKey(key);
        setCurrentCategory(currentFunction[key]);
        setCurrentStandards(currentFunction[key].subcategories);
      }
    });
  }, [currentFunction, currentCategoryNumber]);

  useEffect(() => {
    const currentStandardsKeys = Object.keys(currentStandards);
    setCurrentStandardsKeys(currentStandardsKeys);
    currentStandardsKeys.forEach((key, index) => {
      if (index === currentStandardNumber) {
        setCurrentStandardKey(key);
        setCurrentStandard(currentStandards[key]);
        setCurrentSubCategories(currentStandards[key]);
      }
    });
  }, [currentStandards, currentStandardNumber]);

  useEffect(() => {
    const currentSubCategoryKeys = Object.keys(currentSubCategories);
    setCurrentSubCategoryKeys(currentSubCategoryKeys);
    currentSubCategoryKeys.forEach((key, index) => {
      if (index === currentSubCategoryNumber) {
        setCurrentSubCategoryKey(key);
        setCurrentSubCategory(currentSubCategories[key]);
      }
    });
  }, [currentSubCategories, currentSubCategoryNumber]);


  const beginAssessment = () => {
    setShowAssessmentCreateForm(false);
    setShowCurrentProfileForm(true);
    setShowTargetProfileForm(true);
    setShowRiskAnalysisForm(true);
    setShowRiskManagementForm(true);
  }

  const handleShowTargetProfileForm = () => {
    setShowCurrentProfileForm(false);
    setShowTargetProfileForm(true);
  }

  const handleShowRiskAnalysisForm = () => {
    setShowTargetProfileForm(false);
    setShowRiskAnalysisForm(true);
  }

  const handleShowRiskManagementForm = () => {
    setShowRiskAnalysisForm(false);
    setShowRiskManagementForm(true);
  }

  const goToNext = () => {
    setShowRiskManagementForm(false);

    const isEndOfFunctions = currentFunctionNumber === functionKeys.length - 1;
    const isEndOfFunctionCategories = currentCategoryNumber === currentCategoryKeys.length - 1;
    const isEndOfCategoryStandards = currentStandardNumber === currentStandardKeys.length - 1;
    const isEndOfSubCategories = currentSubCategoryNumber === currentSubCategoryKeys.length - 1;

    console.log("isEndOfFunctions: ", isEndOfFunctions);
    console.log("isEndOfFunctionCategories: ", isEndOfFunctionCategories);
    console.log("isEndOfCategoryStandards: ", isEndOfCategoryStandards);
    console.log("isEndOfSubCategories: ", isEndOfSubCategories);


    if (isEndOfFunctions && isEndOfFunctionCategories && isEndOfSubCategories) {
      setShowAssessmentComplete(true);

      return;
    }

    if (isEndOfFunctionCategories && isEndOfSubCategories) {
      setSetCurrentFunctionNumber(currentFunctionNumber + 1);
      setCurrentCategoryNumber(0);
      setCurrentSubCategoryNumber(0);
      setActiveStep(activeStep + 1);
      setShowCurrentProfileForm(true);

      return;
    }

    if (isEndOfCategoryStandards && isEndOfSubCategories) {
      setCurrentCategoryNumber(currentCategoryNumber + 1);
      setCurrentStandardNumber(0);
      setCurrentSubCategoryNumber(0);
      setShowCurrentProfileForm(true);

      return;
    }

    if (isEndOfSubCategories) {
      setCurrentStandardNumber(currentStandardNumber + 1);
      setCurrentSubCategoryNumber(0);
      setShowCurrentProfileForm(true);

      return;
    }

    setCurrentSubCategoryNumber(currentSubCategoryNumber + 1);
    setShowCurrentProfileForm(true);
  }

  return (
    <Container maxWidth={false}>
      {showAssessmentComplete && <AssessmentComplete assessment={assessment} />}
      {showAssesmentCreateForm && <AssessmentCreate
        currentFunctionKey={currentFunctionKey}
        currentFunction={currentFunction}
        currentCategoryKeys={currentCategoryKeys}
        currentCategoryKey={currentCategoryKey}
        currentCategory={currentCategory}
        currentSubCategoryKey={currentSubCategoryKey}
        currentCategoryNumber={currentCategoryNumber}
        currentStandardKey={currentStandardKey}
        currentSubCategory={currentSubCategory}
        currentSubCategories={currentSubCategories}
        currentSubCategoryNumber={currentSubCategoryNumber}
        beginAssessment={beginAssessment}
        activeStep={activeStep}
        setAssessment={setAssessment}
      />}
      {showCurrentProfileForm && <AssessmentCurrentProfile
        functionKeys={functionKeys}
        currentFunctionNumber={currentFunctionNumber}
        currentFunctionKey={currentFunctionKey}
        currentFunction={currentFunction}
        currentCategoryKey={currentCategoryKey}
        currentCategoryKeys={currentCategoryKeys}
        currentCategory={currentCategory}
        currentCategoryNumber={currentCategoryNumber}
        currentStandardKey={currentStandardKey}
        currentSubCategoryKey={currentSubCategoryKey}
        currentSubCategory={currentSubCategory}
        currentSubCategories={currentSubCategories}
        currentSubCategoryNumber={currentSubCategoryNumber}
        showTargetProfileForm={handleShowTargetProfileForm}
        activeStep={activeStep}
        setAssessment={setAssessment}
      />}
      {showTargetProfileForm && <AssessmentTargetProfile
        functionKeys={functionKeys}
        currentFunctionNumber={currentFunctionNumber}
        currentFunctionKey={currentFunctionKey}
        currentFunction={currentFunction}
        currentCategoryKey={currentCategoryKey}
        currentCategoryKeys={currentCategoryKeys}
        currentCategory={currentCategory}
        currentCategoryNumber={currentCategoryNumber}
        currentStandardKey={currentStandardKey}
        currentSubCategoryKey={currentSubCategoryKey}
        currentSubCategory={currentSubCategory}
        currentSubCategories={currentSubCategories}
        currentSubCategoryNumber={currentSubCategoryNumber}
        showRiskAnalysisForm={handleShowRiskAnalysisForm}
        activeStep={activeStep}
        setAssessment={setAssessment}
      />}
      {showRiskAnalysisForm && <AssessmentRiskAnalysis
        functionKeys={functionKeys}
        currentFunctionNumber={currentFunctionNumber}
        currentFunctionKey={currentFunctionKey}
        currentFunction={currentFunction}
        currentCategoryKey={currentCategoryKey}
        currentCategoryKeys={currentCategoryKeys}
        currentCategory={currentCategory}
        currentCategoryNumber={currentCategoryNumber}
        currentStandardKey={currentStandardKey}
        currentSubCategoryKey={currentSubCategoryKey}
        currentSubCategory={currentSubCategory}
        currentSubCategories={currentSubCategories}
        currentSubCategoryNumber={currentSubCategoryNumber}
        showRiskManagementForm={handleShowRiskManagementForm}
        activeStep={activeStep}
        setAssessment={setAssessment}
      />}
      {showRiskManagementForm && <AssessmentRiskManagement
        functionKeys={functionKeys}
        currentFunctionNumber={currentFunctionNumber}
        currentFunctionKey={currentFunctionKey}
        currentFunction={currentFunction}
        currentCategoryKey={currentCategoryKey}
        currentCategoryKeys={currentCategoryKeys}
        currentCategory={currentCategory}
        currentCategoryNumber={currentCategoryNumber}
        currentStandardKey={currentStandardKey}
        currentSubCategoryKey={currentSubCategoryKey}
        currentSubCategory={currentSubCategory}
        currentSubCategories={currentSubCategories}
        currentSubCategoryNumber={currentSubCategoryNumber}
        goToNext={goToNext}
        activeStep={activeStep}
        setAssessment={setAssessment}
      />}
    </Container>
  );
}

export default AssessmentNew;
