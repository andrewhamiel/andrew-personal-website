import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HomePage extends React.Component {
  render() {
	return (
      <div className="div">
      <h1 className="header">Your Personal Website</h1>
      <p className="paragraph"> </p>
      <ul className="unordered-list"> </ul>
    	<table className="unordered-list"> </table>
      </div>
  );
}
}

// ========================================

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
