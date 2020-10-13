// App.js
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { Route } from 'react-router';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import RegistrationAlerts from './components/Alerts/RegistrationAlerts';
function App() {
  const [title, updateTitle] = useState(null);

  const [errorMessage, updateErrorMessage] = useState(null);

  return (
      <Router>
        <Switch>
          <Route exact path="/registration">
            <RegistrationPage showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route exact path="/">
            <HomePage showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
        </Switch>
        <RegistrationAlerts errorMessage={errorMessage} hideError={updateErrorMessage} />
      </Router>
  );
}

export default App;
