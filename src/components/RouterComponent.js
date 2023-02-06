import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage.js'

const Router = props => {

  return (
    <>
      <Routes>
          <Route path ="/landing" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default Router