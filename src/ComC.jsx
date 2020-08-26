import React from 'react'
import {FirstName,LastName} from './App'
const ComC=()=>{
  return(
    <React.Fragment>
        <FirstName.Consumer>{(fname)=>{
            return(
                <LastName.Consumer>{(lname)=>{
                    return(
                        <h1>Welcome {fname} {lname}</h1>
                    )
                }}</LastName.Consumer>
            )
        }}</FirstName.Consumer>
    </React.Fragment>
  )
}
export default ComC;