import React from 'react';
import {Link} from 'react-router-dom';

const Users = props => {
    const {users} = props; 
    return (
        <div>
            <h4>Users</h4>
            <hr/>
            <ul>
            {users.map(function(user){
                return <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            })}
            </ul>
        </div>
    )
}

export default Users