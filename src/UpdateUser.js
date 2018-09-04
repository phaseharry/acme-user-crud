import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import Users from './Users';

class UpdateUser extends React.Component {
    constructor(){
        super();
        this.state = {
            name : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        console.log(this.props);
        //const id = this.props.match.params.id
        // axios.get(`/api/users/${id}`)
        // .then(data => {
        //     this.setState({name: data.data.name});
        // })
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.put(`/api/users/${this.props.match.params.id}`, this.state)
        .then(user => {
            this.setState({name: ''})
        }).catch(error => console.log(error))
    }
    render(){
        return (
            <div>            
                <UserForm submit={this.handleSubmit} change={this.handleChange} state={this.state}/>
            </div>
        )
    }
}

export default UpdateUser;