import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

class Sidebar extends React.Component {
  componentDidMount() {
    console.log('Sidebar mounted!')
  }
  componentDidUpdate() {
    console.log('Sidebar updated!')
  }

  render() {
    return (
      <Navbar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/testRoute">Change Route</Link>
          </li>
          <li>
            <Link to="/anotherTestRoute">Another Route</Link>
          </li>
        </ul>
      </Navbar>
    )
  }
}

export default Sidebar
