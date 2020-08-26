import React, { useState, useEffect } from 'react'

const App=()=>{
  const [num,setNum]=useState(0)

  useEffect(()=>{
    document.title=`You clicked me ${num} times`
  },[num])

  const Increment=()=>{
    setNum(num+1);
  }
  return(
    <React.Fragment>
      <button onClick={Increment}><h1>Click me {num}</h1></button>
    </React.Fragment>
  )
}
export default App;
