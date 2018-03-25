import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <ul className="navList">
        {routes.map(route =>
           <li key={ route.path } >
            <NavLink to={route.path} className={ route.title.toLowerCase() } >
              <img src={ `/media/${route.title}.svg` } alt='' />
              &nbsp;
              {route.title}
            </NavLink>
          </li>
        )}
      </ul>
    );
  }
}

export default Sidebar;