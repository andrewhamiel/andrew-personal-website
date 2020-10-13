import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './../index.css';
import RegistrationForm from './RegistrationForm';


function RegistrationPage (props) {

	return (
      <div id="RegistrationPage">
        <RegistrationForm showError={props.showError} updateTitle={props.updateTitle}/>
      </div>
  );
}

export default RegistrationPage;
