import React from 'react';
import SVG from 'react-inlinesvg';
import logo from 'assets/images/logo.svg';
import './AppBar.scss';

const AppBar = () => {
  return (
    <div className="AppBar">
      <SVG src={logo} className="AppBar__Logo"></SVG>
    </div>
  )
}

export default AppBar;