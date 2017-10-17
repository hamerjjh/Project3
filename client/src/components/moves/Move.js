import React from 'react'
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

const Move = (props) => {
  const deleteMove =() => {
    props.deleteMove(props._id, props.location)
  }
  return (
    <MovesStyles>
      <h6> {props.description} </h6>
      {/* <textarea name="description" value={props.description}/> */}
      <button onClick={deleteMove}>Delete Activity</button>
    </MovesStyles>
  )
}

export default Move