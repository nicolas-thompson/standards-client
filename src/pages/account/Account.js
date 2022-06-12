import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import PageTitle from '../../components/page-title/PageTitle';
import AccountEmailUsername from '../../components/account/account-email-username/AccountEmailUsername';
import AccountPassword from '../../components/account/account-password/AccountPassword';
import AccountOrganization from '../../components/account/account-organization/AccountOrganization';
import AccountDescription from '../../components/account/account-description/AccountDescription';
import AccountIndustry from '../../components/account/account-industry/AccountIndustry';
import Account2Factor from '../../components/account/account-2-factor/Account2Factor';
import AccountEditProfile from '../../components/account/account-edit-profile/AccountEditProfile';

import CSS from './Account.module.css';

const Account = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [organizationCountry, setOrganizationCountry] = useState('');
  const [organizationCity, setOrganizationCity] = useState('');
  const [description, setDescription] = useState('');
  const [industry, setIndustry] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleOrganizationNameChange = (event) => {
    setOrganizationName(event.target.value);
  }

  const handleOrganizationCountryChange = (country) => {
    setOrganizationCountry(country);
  }

  const handleOrganizationCityChange = (city) => {
    setOrganizationCity(city);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  }

  const handleAccountSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAccount)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      }
      )
  }

  const newAccount = {
    email: email,
    username: username,
    password: password,
    organization_name: organizationName,
    organization_country: organizationCountry,
    organization_city: organizationCity,
    description: description,
    industry: industry
  }

  return (
    <Layout>
      <form className={CSS["account-form"]} onSubmit={handleAccountSubmit}>
        <PageTitle title="Account" />
        <AccountEmailUsername emailChangeHandler={handleEmailChange} usernameChangeHandler={handleUsernameChange} />
        <AccountPassword passwordChangeHandler={handlePasswordChange} />
        <AccountOrganization
          organizationNameChange
          organizationNameChangeHandler={handleOrganizationNameChange}
          organizationCountryChangeHandler={handleOrganizationCountryChange}
          organizationCityChangeHandler={handleOrganizationCityChange}
        />
        <AccountDescription descriptionChangeHandler={handleDescriptionChange} />
        <AccountIndustry industryChangeHandler={handleIndustryChange} />
        <Account2Factor />
        <AccountEditProfile />
      </form>
    </Layout>
  );
}

export default Account;
