import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import LocationsList from './LocationsList'
import { Redirect } from 'react-router-dom'

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
    try {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/locations`)
        console.log(res.data)
        this.setState({user: res.data})
    } catch (err) {
        console.log(err)
    }  
  }

  createNewMove = async (locationId) => {
    try {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/locations/${locationId}/moves`)
        // console.log(this.props)
       this.setState({user: res.data})
    } catch (err) {
        console.log(err)
    }
  }
  deleteLocation = async (locationId) => {
    const { userId } = this.props.match.params
    const id = locationId
    const res = await axios.delete(`/api/users/${userId}/locations/${id}`)
    this.setState({user: res.data})
  }
  deleteUser = async () => {
      const { userId } = this.props.match.params
      const id = userId
      const res = await axios.delete(`/api/users/${userId}`)
      this.setState({ redirectToHomePage: true})
  }
  deleteMove = async (movesId, locationId) => {
    const { userId } = this.props.match.params
    const id = userId
    const res = await axios.delete(`/api/users/${userId}/locations/${locationId}/moves/${movesId}`)
    this.setState({user: res.data})
} 
  handleChange = (event, locationId) => {
    const attribute = event.target.name
    const clonedUserModel = {...this.state.user}
    const location = clonedUserModel.locations.find(i => i._id === locationId)
    console.log(location)
    location[attribute] = event.target.value
    this.setState({user: clonedUserModel})
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
    if (this.state.redirectToHomePage){
        return <Redirect to="/" />
    }
    return (
      <div>
        <LocationsTitleStyle>
          <h1>{this.state.user.userName}'s Vacation Board</h1>
          <button onClick={this.createNewLocation}>New Location</button>
         <button onClick={this.deleteUser}> Delete User</button>
          </LocationsTitleStyle>
          <LocationsList locations={this.state.user.locations}
          handleChange={this.state.user.locations}
          deleteLocation={this.deleteLocation} createNewMove={this.createNewMove}
          updateIdea={this.updateLocation} deleteMove={this.deleteMove}
          />
      </div>
    )
  }
}
export default LocationsPage