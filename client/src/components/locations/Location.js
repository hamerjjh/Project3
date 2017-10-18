import React, { Component } from 'react'
import styled from 'styled-components'
import MovesList from '../moves/MovesList.js'

const LocationsStyles = styled.div`
  height: 300px;
  width: 300px;
  margin: 20px;
  background-color: rgba(253, 255, 0, 0.79);
  input {
    font-weight: bold;
  }
  input, textarea {
    display: block;
    font-size: 1.2rem;
    margin: 10px 0;
    border: none;
    background-color: initial;
  }
  textarea{
    width: 95%;
    height: 70%
  }
  h3{
    text-align: center;
  }
  button {
    text-align: center;
  }
`

class Location extends Component {
  state = {
    toggle: false
  }
  deleteLocation = () => {
    this.props.deleteLocation(this.props._id)
  }
  handleChange = (event) => {
    this.props.handleChange(event, this.props._id)
  }
  updateLocation = () => {
    this.props.updateLocation(this.props._id)
  }
  createNewMove = () => {
    this.props.createNewMove(this.props._id)
  }
  updateMove = () => {
    this.props.updateMove(this.props._id)
  }
  toggleInput = () => {
    this.setState({ toggle: !this.state.toggle })
    this.props.updateLocation(this.props._id)
  }

  render() {
    return (
      <div>
        <LocationsStyles>
          {this.state.toggle
          ? <div>
            <input onChange={this.handleChange} onBlur={this.toggleInput} name="city" value={this.props.city}/>
            <input onChange={this.handleChange} onBlur={this.toggleInput} name="state" value={this.props.state}/>
          </div>
          
          : <h3 onClick={this.toggleInput}> {this.props.city} {this.props.state} </h3> 
          }
          <button onClick={this.createNewMove}>Add Activity</button>
          <button onClick={this.deleteLocation}>Delete Location</button>
          <MovesList moves={this.props.moves} deleteMove={this.props.deleteMove} updateMove={this.props.updateMove} location={this.props._id} handleMoveChange={this.props.handleMoveChange}/>
        </LocationsStyles>
      </div>
    )
  }
}

  export default Location