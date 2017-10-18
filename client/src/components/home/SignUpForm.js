
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const SignUpFormStyles = styled.div`
    
  h2{
    text-align: center;
  }
  form{
      text-align: center;
    }
 


`
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
      <SignUpFormStyles>
        <h2>Sign-Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">Name</label>
            <input onChange={this.handleChange} name="userName" type="text" value={this.state.newUser.userName} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} name="email" type="text" value={this.state.newUser.email}/>
          </div>
          <button>Sign Up</button>
        </form>
      </SignUpFormStyles>
    )
  }
}

export default SignUpForm