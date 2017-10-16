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
  createNewLocation = async () => {
    const { userId } = this.props.match.params
    const res = await axios.post(`/api/users/${userId}`)
    console.log(res.data)
    this.setState({user: res.data})
  }
  deleteLocation = async (locationId) => {
    const { userId } = this.props.match.params
    const id = locationId
    const res = await axios.delete(`/api/users/${userId}/locations/${id}`)
    this.setState({user: res.data})
  }
  handleChange = (event, locationId) => {
    const attribute = event.target.name
    const clonedUser = {...this.state.user}
    const location = clonedUser.locations.find(i => i._id === locationId)
    console.log(location)
    location[attribute] = event.target.value
    this.setState({user: clonedUser})
  }
  updateLocation = async (locationId) => {
    const { userId } = this.props.match.params
    const id = locationId

    const clonedUserModel = {...this.state.user}
    const location = clonedUserModel.locations.find(i => i._id === locationId)

    const res = await axios.patch(`/api/users/${userId}/locations/${id}`, {
      location: location
    })
    this.setState({user: res.data})
  }

  render () {
    return (
      <div>
        <LocationsTitleStyle>
          <h1>{this.state.user.userName}'s Vacation Board</h1>
          <button onClick={this.createNewLocation}>New Location</button>
         {/* <button onClick={this.deleteUserModel}> Delete User</button> */}
          </LocationsTitleStyle>
          <LocationsList locations={this.state.user.locations}
          handleChange={this.state.user.locations}
          deleteLocation={this.deleteLocation}
          updateIdea={this.updateLocation}
          />
      </div>
    )
  }
}
export default LocationsPage