import { useState } from "react";
import AssessmentCreateAssessmentName from "../assessment-create-assessment-name/AssessmentCreateAssessmentName";
import AssessmentCreateProductName from "../assessment-create-product-name/AssessmentCreateProductName";
import AssessmentCreateIndustry from "../assessment-create-industry/AssessmentCreateIndustry";
import AssessmentCreateOperatingLocation from "../assessment-create-operating-location/AssessmentCreateOperatingLocation";
import AssessmentCreateStandardsFilter from "../assessment-create-standards-filter/AssessmentCreateStandardsFilter";
import AssessmentCreateCreateAssessment from "../assesssment-create-create-assessment/AssessmentCreateCreateAssessment";

const AssessmentCreate = ({ beginAssessment, setAssessment }) => {

  const [assessmentName, setAssessmentName] = useState("");
  const [productName, setProductName] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [standardsFilter, setStandardsFilter] = useState("");

  const handleAssessmentNameChange = (event) => {
    setAssessmentName(event.target.value);
  }

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  }

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  }

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  const handleCityChange = (city) => {
    setCity(city);
  };

  const handleStandardsFilterChange = (event) => {
    setStandardsFilter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setAssessment((previousAssessmentState) => {
      return {
        ...previousAssessmentState,
        name: assessmentName,
        product_name: productName,
        industry: industry,
        country: country,
        city: city,
        filters: [],
        status: "in-progress"
      }
    });

    beginAssessment();
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <AssessmentCreateAssessmentName assessmentNameChangeHandler={handleAssessmentNameChange} />
        <AssessmentCreateProductName productNameChangeHandler={handleProductNameChange} />
        <AssessmentCreateIndustry industryChangeHandler={handleIndustryChange} />
        <AssessmentCreateOperatingLocation
          country
          countryChangeHandler={handleCountryChange}
          city
          cityChangeHandler={handleCityChange}
        />
        <AssessmentCreateStandardsFilter standardsFilterChangeHandler={handleStandardsFilterChange} />
        <AssessmentCreateCreateAssessment />
      </form>
    </>
  );
}

export default AssessmentCreate;