import React from 'react'
import styled from 'styled-components'
import Locations from './Locations'

const LocationsListStyles = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const LocationsList = (props) => {
  return (
    <LocationsListStyles>
      {props.locations.map((location) => {
        return (
          <Locations key={location._id} _id={location._id}  
          handleChange={props.handleChange}
          updateLocation={props.updateLocation} deleteLocation={props.deleteLocation}
          city={location.city} state={location.state} moves={location.moves}/>
        )
      })}
    </LocationsListStyles> 
  )
  
}

export default LocationsList