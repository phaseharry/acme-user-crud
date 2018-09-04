import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Users from './Users';
import UserCreate from './UserCreate';
import UpdateUser from './UpdateUser';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.update = this.update.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    return axios
      .get('/api/users')
      .then(data => {
        const users = data.data;
        this.setState({ users });
      })
      .catch(error => console.log(error));
  }
  addUser(user) {
    this.setState({
      users: [...this.state.users, user],
    });
  }
  update(user) {
    const copy = this.state.users.slice();
  }
  deleteUser(id) {
    axios.delete(`/users/${id}`).then(data => {
      const deleted = data.data;
      console.log(deleted);
      const newArr = this.state.users.filter(function(user) {
        return user.id !== deleted.id;
      });
      this.setState({
        users: newArr,
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar users={this.state.users} />
        <hr />
        <div>
          <Route
            exact
            path="/"
            render={() => <Home number={this.state.users.length} />}
          />
          <Route
            exact
            path="/users"
            render={() => (
              <Users users={this.state.users} deleteUser={this.deleteUser} />
            )}
          />
          <Route
            path="/addUser"
            render={() => (
              <UserCreate
                addUser={this.addUser}
                users={this.state.users}
                deleteUSer={this.deleteUser}
              />
            )}
          />
          <Route
            path={`/user/:id`}
            render={props => (
              <UpdateUser
                update={this.update}
                users={this.state.users}
                {...props}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default Main;

// React.createElement(UpdateUser, {
//     update: this.update,
//     users: this.state.users,
//     ...props,
// })
