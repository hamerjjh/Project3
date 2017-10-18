import React, { Component } from 'react'
import styled from 'styled-components'

const MovesStyles = styled.div`
  display: list-item;
  flex-direction: column; 
  input, textarea {
    font-size: 1.2rem;
    margin: 10px 0;
    border: none;
    background-color: initial;
  }
  textarea{
    width: 95%;
    height: 70%
  }

  input[type="checkbox"]:checked + label {
    color:red;
    text-decoration: line-through;
  } 
`

class Move extends Component {
  state = {
    toggle: false
  }

  deleteMove = () => {
    this.props.deleteMove(this.props._id, this.props.location)
  }

  handleMoveChange = (event) => {
    this.props.handleMoveChange(event, this.props.location, this.props._id)
  }

  toggleInput = () => {
    this.setState({ toggle: !this.state.toggle })
    this.props.updateMove(this.props.location, this.props._id)
  }

  render() {
    return (
      <MovesStyles>

        {this.state.toggle
          ? <textarea onChange={this.handleMoveChange} onBlur={this.toggleInput} name="description" value={this.props.description} />
          : (
            <div>
              <input type="checkbox" name="completed" value={this.props.completed} onChange={this.handleMoveChange} checked={this.props.completed} />
              <label for="completed" onClick={this.toggleInput}> {this.props.description} </label>
            </div>
          )

        }
        <button onClick={this.deleteMove}>Delete Activity</button>
      </MovesStyles>
    )
  }

}

export default Move