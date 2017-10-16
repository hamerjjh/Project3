import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MovesList from './MovesList'

const MovesTitleStyle = styled.div`
  text-align:center;
  button {
    margin: 30px auto;
    padding: 10px;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    background-color: #215de5;
    color: #ecf0f1;
  }
`

class MovesPage extends Component {
  state={
    user: {
      userName: '',
      password: '',
      moves: []
    }
  }

  async componentWillMount () {
    const { userId } = this.props.match.params
    const res = await axios.get(`/api/users/${userId}`)
    this.setState({user: res.data})
  }

  render () {
    return (
      <div>
        <MovesTitleStyle>
          <h1>{this.state.user.userName}'s Activity Board</h1>
          <button>New Activity</button>
        </MovesTitleStyle>
        <MovesList moves={this.state.user.moves} />
      </div>
    )
  }
}
export default MovePage