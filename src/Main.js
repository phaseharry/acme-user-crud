import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Users from './Users';
import UserCreate from './UserCreate';
import UpdateUser from './UpdateUser';

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            users : []
        }
        this.addUser = this.addUser.bind(this);
        this.update = this.update.bind(this);
    }
    componentDidMount(){
        return axios.get('/api/users')
        .then(data => {
           const users = data.data
            this.setState({users})
        })
        .catch(error => console.log(error))
    }
    addUser(user){
        this.setState({
            users : [...this.state.users, user]
        })
    }
    update(user){
        const copy = this.state.users.slice();

        
    }

    render(){
        return (
            <div>
                <NavBar users={this.state.users}/>
                <hr/>
                    <div>
                        <Route exact path='/' render={() => <Home number={this.state.users.length}/>} />
                        <Route exact path='/users' render={() => <Users users={this.state.users}/>} />
                        <Route path='/addUser' render={ () => <UserCreate addUser={this.addUser} users={this.state.users} /> }/> 
                        <Route path={`/user/:id`} render = { () => <UpdateUser update={this.update} users={this.state.users}/>} />
                    </div> 
            </div>
        )
    }
}

export default Main;
