import React from 'react'
import styled from 'styled-components'
import Location from './Location'

const LocationsListStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const LocationsList = (props) => {
  return (
    <LocationsListStyles>
      {props.locations.map((location) => {
        return (
          <Location key={location._id} _id={location._id}  
          handleChange={props.handleChange}
          updateLocation={props.updateLocation} deleteLocation={props.deleteLocation}
          city={location.city} state={location.state} moves={location.moves} 
          createNewMove={props.createNewMove} deleteMove={props.deleteMove} 
          handleMoveChange={props.handleMoveChange} updateMove={props.updateMove}/>
        )
      })}
    </LocationsListStyles> 
  )
  
}

export default LocationsList