import React from 'react';
import axios from 'axios';
import Users from './Users';
import UserForm from './UserForm';

class UserCreate extends React.Component{
    constructor(){
        super();
        this.state = {
            name : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post('/api/users', this.state)
        .then(user => {
            console.log(user);
            this.props.addUser(user.data);
            this.setState({name: ''})
        }).catch(error => console.log(error))
    }

    render(){
        
        return (
        <div>
            <Users users={this.props.users}/>
            <UserForm submit={this.handleSubmit} change={this.handleChange} state={this.state}/>
        </div>
        )
    }
}

export default UserCreate;