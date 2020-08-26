import React, { useState, useEffect } from 'react'

const App=()=>{
  const [num,setNum]=useState(0)
  const [nums,setNums]=useState(2)

  useEffect(()=>{
    alert('I am clicked')
  },[num])

  const Increment=()=>{
    setNum(num+1);
  }
  const Decrement=()=>{
    setNums(nums+1);
  }
  return(
    <React.Fragment>
      <button onClick={Increment}><h1>Click me {num}</h1></button>
      <button onClick={Decrement}><h1>Click now {nums}</h1></button>
    </React.Fragment>
  )
}
export default App;
