import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const HomePageStyles = styled.div`

   h1{
   text-align: center;
   }
   h3{
    text-align: center;
    }
`

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
      <HomePageStyles>
        <h1>Vacation Planners</h1>
        <h3>~A Vacation Without A Plan Is Just A Wish~</h3>
        <h4>Click User Name and Plan Away</h4>
        {this.state.users.map((user) => {
          return (<Link key={user._id} to={`/users/${user._id}`}>{user.userName}</Link>)
        })}
        <SignUpForm />
      </HomePageStyles>
    )
  }
}

export default HomePage