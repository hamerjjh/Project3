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

const Moves = (props) => {
  return (
    <MovesStyles>
      <input name="description" value={props.description} />
      {/* <textarea name="description" value={props.description}/> */}
      <button>Delete Activity</button>
    </MovesStyles>
  )
}

export default Moves