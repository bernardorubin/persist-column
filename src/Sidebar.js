import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Ul = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const Li = styled.li`
  color: lightblue
  & : visited {
    color: lightblue 
  }

  & : hover {
    color: black
  }
  font-size: 20px
`
const A = styled(Link)`
  text-decoration: none;
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
        <Ul>
          <Li>
            <A to="/">Home Route</A>
          </Li>
          <Li>
            <A to="/testRoute">Navigate to Test Route</A>
          </Li>
          <Li>
            <A to="/anotherTestRoute">Navigate to another Test Route</A>
          </Li>
        </Ul>
      </Navbar>
    )
  }
}

export default Sidebar
