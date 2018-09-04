import React from 'react';
import { Link } from 'react-router-dom';

const Users = props => {
  const { users, deleteUser } = props;

  return (
    <div>
      <h4>Users</h4>
      <hr />
      <ul>
        {users.map(function(user) {
          return (
            <div key={user.id}>
              <hr />
              <Link to={`/user/${user.id}`}>{user.name}</Link>
              <button onClick={() => deleteUser(user.id)}> X </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
