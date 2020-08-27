import React from 'react'
import { NavLink } from 'react-router-dom'

const Error=()=>{
  return (
    <React.Fragment>
      <h1>Oops 404! Page Not Found</h1>
      <NavLink to="/">Go Back</NavLink>
    </React.Fragment>
  )
}

export default Error;