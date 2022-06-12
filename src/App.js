import { Route, Switch } from "react-router-dom";

import Cover from "./pages/cover/Cover";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import Assessment from "./pages/assessment/Assessment";
import Score from "./pages/score/Score";
import RiskManagement from "./pages/risk-management/RiskManagement";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Cover} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/risk-management" component={RiskManagement} />
        <Route exact path="/score/:assessmentId" component={Score} />
        <Route exact path="/score" component={Score} />
        <Route exact path="/assessment" component={Assessment} />
      </Switch>
    </>
  );
}

export default App;
