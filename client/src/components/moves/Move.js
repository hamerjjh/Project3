import React, {Component} from 'react'
import styled from 'styled-components'

const MovesStyles = styled.div`

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

class Move extends Component {
  state ={
    toggle: false
  }

  deleteMove = () => {
    this.props.deleteMove(this.props._id, this.props.location)
  }

  toggleInput = () => {
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    return (
      <MovesStyles>
        {this.state.toggle 
          ? <textarea onBlur={this.toggleInput} name="description" value={this.props.description}/>
          : <h5 onClick={this.toggleInput}> {this.props.description} </h5>
        }
        
        
        <button onClick={this.deleteMove}>Delete Activity</button>
      </MovesStyles>
    )
  }
  
}

export default Move