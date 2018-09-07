import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const { path, users } = props;
  const isSelected = _path => _path === path; //the passed in pathname is compared to whatever we pass in in the links
  return (
    <div>
      <Link to="/">
        <div className={isSelected('/') ? 'selected' : ''}>Home</div>
      </Link>
      <Link to="/users">
        <div className={isSelected('/users') ? 'selected' : ''}>
          Users(
          {users.length})
        </div>
      </Link>
      <Link to="/addUser">
        <div className={isSelected('/addUser') ? 'selected' : ''}>
          Add A User
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
