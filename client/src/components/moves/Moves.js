import React from 'react'
import styled from 'styled-components'

const MovesStyles = styled.div`
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

const Moves = (props) => {
  return (
    <MovesStyles>
      <input name="title" value={props.title} />
      <textarea name="description" value={props.description}/>
      <button>Delete Activity</button>
    </MovesStyles>
  )
}

export default Moves