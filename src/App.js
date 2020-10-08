// App.js
import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Route } from 'react-router';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
const App = () => {
  return (
    <section className="App">
      <Router>

        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </section>
  );
};

export default App;
