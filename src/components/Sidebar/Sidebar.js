import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

class Sidebar extends Component {
  render() {
    return (
      <ul>
        {routes.map(route =>
           <li key={ route.path } >
            <Link to={route.path}>
              {route.title}
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default Sidebar;