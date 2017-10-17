import React from 'react'
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
`

const Locations = (props) => {
    const deleteLocation = () => {
        props.deleteLocation(props._id)
    }
    const handleChange = (event) => {
        props.handleChange(event, props._id)
      }
      const updateLocation = () => {
        props.updateLocation(props._id)
      }
  return (
    <div>
    <LocationsStyles>
      <input onBlur={updateLocation} onChange={handleChange} name="city" value={props.city} />
      <input onBlur={updateLocation} onChange={handleChange} name="state" value={props.state}/>
      <button onClick={deleteLocation}>Delete Location</button>
    <MovesList moves={props.moves} />
    </LocationsStyles>
    </div>
  )
}

export default Locations