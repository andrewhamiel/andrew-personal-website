import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './../index.css';
import RegistrationForm from './RegistrationForm';


class RegistrationPage extends React.Component {
  render() {
	return (
      <div id="RegistrationPage">
        <RegistrationForm />
      </div>
  );
}
}
export default RegistrationPage;
