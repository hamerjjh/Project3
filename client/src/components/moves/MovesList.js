import React, { Component } from 'react'
import styled from 'styled-components'
import Move from './Move'

const MovesListStyles = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

class MovesList extends Component {
  state= {
    move: {
      description: '',
      completed: false, 
    }
  }

  render() {
    return (
      <MovesListStyles>
        {this.props.moves.map((move) => {
          return (
            <Move key={move._id} _id={move._id} description={move.description} completed={move.completed} 
            deleteMove={this.props.deleteMove} handleMoveChange={this.props.handleMoveChange} 
            updateMove={this.props.updateMove} location={this.props.location}/>
          )
        })}
      </MovesListStyles>
    )
  } 
}


export default MovesList