import React, { Component } from 'react'
import styled from 'styled-components'
import MovesList from '../moves/MovesList.js'

const LocationsStyles = styled.div`
  display: inline-block;
	width:75%;
	background-color: lightyellow;
    border: 1px solid #B9D6C2;
    margin-bottom: 8px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 50px;
    padding: 2em;
    position: relative;
    min-width: 340px;
    max-width:800px;
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
    display: inline;
    justify-content: center;
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