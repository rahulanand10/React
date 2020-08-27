import React from 'react'
import {useParams,useLocation,useHistory} from 'react-router-dom'

const User=()=>{
  const {fname,lname}=useParams();
  const location=useLocation();
  const history=useHistory();
  console.log(location.pathname);
  return(
      <React.Fragment>
        <h1>user {fname} {lname} page</h1>
        <h3>Your current location is {location.pathname}</h3>
        {location.pathname===`/user/rahul/anand`?
        <button onClick={()=> history.goBack()}>Go back</button>:null
    }
   {/* {location.pathname===`/user/rahul/anand`?
    <button onClick={()=> history.push('/')}>Home page</button>:null}
*/}
      </React.Fragment>
      ) 

}

export default User;