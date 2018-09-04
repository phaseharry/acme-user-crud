import React from 'react';
import {Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
            <div>
                <Link to='/'><div>Home</div></Link>
                <Link to='/users'><div>Users({props.users.length})</div></Link>
                <Link to='/addUser'><div>Add A User</div></Link>
            </div>
    )
}

export default NavBar;