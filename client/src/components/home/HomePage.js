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
    a{
      padding: 10px;
    }
    img {
      margin-left: 380px;
      height: 350px;
      width: 500px;

      @media only screen and (min-width: 1600px) {
        margin-left: 400px
      }

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
        <h3>~A Vacation Without A Plan Is Just A Trip~</h3>
        <h4>Choose Name and Continue</h4>
        {this.state.users.map((user) => {
          return (<Link key={user._id} to={`/users/${user._id}`}>{user.userName}</Link>)
        })}
        <SignUpForm />
        <img src ="http://images.mentalfloss.com/sites/default/files/passportsprim.png?resize=1100x740" />
      </HomePageStyles>
    )
  }
}

export default HomePage