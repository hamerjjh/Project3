import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'


class HomePage extends Component {
  state = {
    users: []
  }

  componentWillMount () {
    this.getAllUsers()
  }

  getAllUsers = async () => {
      try{
    const res = await axios.get('/api/users')
    console.log(res)
    this.setState({users: res.data})
  }
    catch (err) {
        console.log(err)
    }
  }
  render () {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {this.state.users.map(user => {
          return (<Link key={user._id} to={`/users/${user._id}`}>{user.userName}</Link>)
        })}
        <SignUpForm />
      </div>
    )
  }
}

export default HomePage