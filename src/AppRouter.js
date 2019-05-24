import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import styled from 'styled-components'

function Index() {
  return <h2>Index Route</h2>
}

function TestRoute() {
  return <h2>You are in another Route</h2>
}

function AnotherTestRoute() {
  return <h2>You are in yet another Route</h2>
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
const RouteContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: lightblue;
  height: 100%;
  align-items: center;
  justify-content: center;
`

function AppRouter() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <RouteContainer>
          <Route path="/" exact component={Index} />
          <Route path="/testRoute" component={TestRoute} />
          <Route path="/anotherTestRoute" component={AnotherTestRoute} />
        </RouteContainer>
      </Container>
    </Router>
  )
}

export default AppRouter
