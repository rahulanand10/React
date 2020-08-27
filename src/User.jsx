import React from 'react'
import {useParams,useLocation} from 'react-router-dom'

const User=()=>{
  const {fname,lname}=useParams();
  const location=useLocation()
  console.log(location.pathname);
  return(
      <React.Fragment>
        <h1>user {fname} {lname} page</h1>
        <h3>Your current location is {location.pathname}</h3>
        {location.pathname===`/user/rahul/anand`?
        <button onClick={()=>{alert('You are awesome')}}>Click Me</button>:null
    }
      </React.Fragment>
      ) 

}

export default User;