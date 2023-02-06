import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import LandingPage from './LandingPage.js'

const RouterComponent = props => {

  return (
    <>
      <HashRouter>
          <Route exact path ="/landing" element={<LandingPage />} />
      </HashRouter>
    </>
  )
}

export default RouterComponent