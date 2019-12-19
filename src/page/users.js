import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux';

//import action users.js
import { getUsers, getUsersPending } from '../_actions/users'

class Users extends Component {

    componentDidMount() {
        this.props.dispatch(getUsersPending());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                this.props.dispatch(getUsers(users))
            })
    }

    render() {
        return (
            <div className="App-header">
                <h1>Hello Redux</h1>
                {this.props.users.isLoading === false ? null : <p>Loading...</p>}
                {this.props.users.data.map((user, index) => (
                    <p key={index}>{user.name}</p>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Users);