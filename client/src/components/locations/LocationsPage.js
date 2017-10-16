import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import LocationsList from './LocationsList'

const LocationsTitleStyle = styled.div`
  text-align:center;
  button {
    margin: 30px auto;
    padding: 10px;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    background-color: #215de5;
    color: #ecf0f1;
  }
`

class LocationsPage extends Component {
  state={
    user: {
      userName: '',
      email: '',
      locations: []
    }
  }

  async componentWillMount () {
    console.log('mounting')
    const { userId } = this.props.match.params
    const res = await axios.get(`/api/users/${userId}`)
    console.log(res)
    this.setState({user: res.data})
  }

  render () {
    return (
      <div>
        <LocationsTitleStyle>
          <h1>{this.state.user.userName}'s Vacation Board</h1>
          <button>New Location</button>
        </LocationsTitleStyle>
        <LocationsList locations={this.state.user.locations} />
      </div>
    )
  }
}
export default LocationsPage