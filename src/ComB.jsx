import React, { useContext } from 'react'
import ComC from './ComC'
import {FirstName,LastName} from './App'

const ComB=()=>{
  const fname=useContext(FirstName)
  const lname=useContext(LastName)
  return(
    <React.Fragment>
        <h1>FROM USE CONTEXT {fname} {lname}</h1>
        <ComC/>
    </React.Fragment>
  )
}
export default ComB;