import React from 'react'
import { Link } from "react-router-dom"

const LandingPage = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <h3>Blog post 1</h3>
          Update
          {/* <p> <Link to={'/project1'}>
        Click me to go to Project 1
      </Link></p> */}
      {/* <p> <Link to={'/project1-app'}>
        Click me to go to Project 1 App
      </Link> */}
      <p> <Link to={'/blog'}>
        Click me to go to Blog
      </Link></p>
      <p> <Link to={'/wishlist'}>
        Click me to go to WishList
      </Link></p>

      <p> <Link to={'/project1'}>
        Click me to go to Project 1
      </Link></p>


          {/* </p> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
        <div className="col-sm-4">
          <h3>Blog post 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
        <div className="col-sm-4">
          <h3>Blog post 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
        </div>
      </div>
    </div>
  )
}
export default LandingPage


