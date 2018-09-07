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
    this.loadUsers = this.loadUsers.bind(this);
  }
  componentDidMount() {
    this.loadUsers();
  }
  loadUsers() {
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
    axios.delete(`api/users/${id}`).then(() => {
      this.loadUsers();
    });
  }

  render() {
    const renderNav = ({ location }) => {
      //since we're using a route to render navbar we get the route parameters (history, location, params)
      return <NavBar users={this.state.users} path={location.pathname} />;
    };
    return (
      <div>
        <Route render={renderNav} />
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
                deleteUser={this.deleteUser}
              />
            )}
          />
          <Route
            path={`/user/:id`}
            render={props => (
              <UpdateUser
                update={this.update}
                users={this.state.users}
                deleteUser={this.deleteUser}
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
