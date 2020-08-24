import React, { useState } from 'react';


const App=()=>{

  const [number,setNumber]=useState(0)

  const Increment=()=>{
    setNumber(number+1)
  }
  const Decrement=()=>{
    if (number===0){
      alert('Value is 0')
    }
    else{
      setNumber(number-1)
    }
  }
  return(
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>{number}</h1>
          <br/>
          <button onClick={Increment}>Increm</button>
          <button onClick={Decrement}>Decrem</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;