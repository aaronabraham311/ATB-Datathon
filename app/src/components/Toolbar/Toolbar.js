import React from 'react';
import './Toolbar.css'

const toolbar = (props) => {
  return (
  <header className = 'toolbar'>
    <nav className = 'toolbar_navigation'>
      <div></div>
      <div className = 'toolbar_logo'> <a href = "/"> Crop Disease Prediction App </a> </div>
      <div className = 'toolbar_navigation_items'>
        <ul>
          <li> <a href = "/"> Image Recognition </a> </li>
          <li> <a href = "/"> Disease Map </a> </li>

        </ul>
      </div>
    </nav>
  </header> );
};

export default toolbar;
