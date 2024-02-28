import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import CSS for styling
import '../styles/LeftNavigator.css'; 
// Import SVG files
import { ReactComponent as ListUsers } from '../svg/list-users.svg';


const LeftNavigator = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`left-navigator ${expanded ? 'expanded' : ''}`}>
      <h3 onClick={toggleMenu}>Menu</h3>
      <ul>
        <li>
          {expanded ? ( // Render icon and link when menu is expanded
            <Link to="/employees" className="menu-link">
              <ListUsers className="menu-icon" />
              List Employees
            </Link>
          ) : ( // Render only icon when menu is collapsed
            <Link to="/employees" className="menu-link">
              <ListUsers className="menu-icon" />
            </Link>
          )}
        </li>
        <li>
          {expanded ? ( // Render icon and link when menu is expanded
            <Link to="/employees" className="menu-link">
              <ListUsers className="menu-icon" />
              List Employees
            </Link>
          ) : ( // Render only icon when menu is collapsed
            <Link to="/employees" className="menu-link">
              <ListUsers className="menu-icon" />
            </Link>
          )}
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
};

export default LeftNavigator;