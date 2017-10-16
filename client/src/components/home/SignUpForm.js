
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignUpForm extends Component {
  state = {
    newUser: {
      userName: '',
      email: ''
    },
    redirectToLocationsPage: false,
    newUserId: ''
  }

  handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.newUser}
    updateUser[attribute] = event.target.value
    this.setState({newUser: updateUser})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post('/api/users', {
      'user': this.state.newUser
    })
    console.log(res.data)
    this.setState({ redirectToLocationsPage: true, newUserId: res.data._id})
  }

  render () {
      if (this.state.redirectToLocationsPage) {
          return <Redirect to={`/users/${this.state.newUserId}`} />
      }
    return (
      <div>
        <h1>Sign-Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input onChange={this.handleChange} name="userName" type="text" value={this.state.newUser.userName} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} name="email" type="text" value={this.state.newUser.email}/>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm