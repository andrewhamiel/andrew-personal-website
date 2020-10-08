import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import Header from './Header';


class Introduction extends React.Component {
  render () {
      return (
      <div class="component">
      <h2>Introduction</h2>
      <p id="about">Learn all about Andrew!</p>
      <p>Andrew puts his introduction here.</p>
      <p>This is where more information would be included.</p>
      <p>Last sentence of intro.</p>
      </div>
      );
  }
}

class WebsiteFeaturesDescription extends React.Component {
  render() {
    return(
      <div class="component">
        <h2>Website Features</h2>
        <p>These are the features intended for my personal website:</p>
        <ul class="webiste-features">
          <li>HomePage</li>
          <li>Login Features</li>
          <li>Mining Dashboard</li>
          <li>Markets Dashboard</li>
          <li>Tutoring Hub</li>
          <li>PC Building Hub</li>
          <li>Website Building Hub</li>
          <li>Proactive Health Hub</li>
          <li>Coding Practice Widget</li>
        </ul>
      </div>
    );
  }
}

function Priorities(element){
  var elements = ["Home Page", "Login Functionality", "Mining Dashboard", "Markets Dashboard", "Tutoring Hub", "PC Building Hub", "WebsiteBuildingHub", "Proactive Health Hub", "Coding Practice Widget"];
  var returnElement = elements[element];
  return (<td value={returnElement}>{returnElement}</td>);
}

class FeaturePrioritization extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      features: ["Home Page", "Login Functionality", "Mining Dashboard", "Markets Dashboard", "Tutoring Hub", "PC Building Hub", "WebsiteBuildingHub", "Proactive Health Hub", "Coding Practice Widget"]
    };
  }

  renderElements(i){
    return(
      <tr>
      <td>{i}</td>
      <td value={this.state.features[i-1]}>{this.state.features[i-1]}</td>
      </tr>
    );
  }

  renderTable(){

    return (
      <table>
        <tr>
          <th>Priority</th>
          <th>Feature</th>
        </tr>
        {this.renderElements(1)}
        {this.renderElements(2)}
        {this.renderElements(3)}
        {this.renderElements(4)}
        {this.renderElements(5)}
        {this.renderElements(6)}
        {this.renderElements(7)}
        {this.renderElements(8)}
        {this.renderElements(9)}
      </table>
    );
  }
  render() {
    return(
      <div class="component">
        <p>Here is the priority of features for the site:</p>
        <div className = "tableElement">
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

class ContactInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        mobile: "Put Cell here",
        email: "Put Email here",
        linkedin: "Put Linkedin Here",
      };
  }

  render () {
      return (
      <div class="component">
      <h2>Contact Info</h2>
      <p>Here are a few different methods to get in contact with me.</p>
      <table>
        <tr>
          <td>Mobile</td>
          <td>{this.state.mobile}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{this.state.email}</td>
        </tr>
        <tr>
          <td>LinkedIn</td>
          <td>{this.state.linkedin}</td>
        </tr>
      </table>
      </div>
      );
  }
}

class HomePage extends React.Component {
  render() {
	return (
      <div>
        <Header />
        <h1>Andrew's Personal Website</h1>
        <Introduction />
        <WebsiteFeaturesDescription />
        <FeaturePrioritization />
        <ContactInfo />
      </div>
  );
}
}

export default HomePage;
