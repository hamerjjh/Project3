import React from 'react'
import styled from 'styled-components'
import Moves from './Moves'

const MovesListStyles = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const MovesList = (props) => {
  return (
    <MovesListStyles>
      {props.moves.map((move) => {
        return (
          <Move key={move._id} title={move.title} description={move.description} />
        )
      })}
    </MovesListStyles>
  )
}

export default MovesList