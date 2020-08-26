import React, { createContext } from 'react'
import ComA from './ComA'

const FirstName=createContext();
const LastName=createContext();
const App=()=>{
  return(
    <React.Fragment>
      <FirstName.Provider value="Rahul">
        <LastName.Provider value="Anand">
          <ComA/>
        </LastName.Provider>
      </FirstName.Provider>
    </React.Fragment>
  )
}
export default App;
export {FirstName,LastName}