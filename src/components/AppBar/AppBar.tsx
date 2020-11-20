import React from 'react';
import SVG from 'react-inlinesvg';
import logo from 'assets/images/logo.svg';
import './AppBar.scss';

const AppBar = () => {
  return (
    <div className="AppBar">
      <SVG src={logo} className="AppBar__Logo"></SVG>
      <ul className="AppBar__Nav">
        <li className="AppBar__NavItem">Сервисы</li>
        <li className="AppBar__NavItem">Задачи</li>
        <li className="AppBar__NavItem">События</li>
      </ul>
      <div className="AppBar__Toolbar"></div>
    </div>
  )
}

export default AppBar;