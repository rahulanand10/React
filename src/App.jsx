import React,{useState} from 'react';


const App=()=>{
  let curr=new Date().toLocaleTimeString()
  const [date,settime]=useState(curr);

  const setTime=()=>{
    let cur=new Date().toLocaleTimeString()
    settime(cur);
}
  return(
    <React.Fragment>
      <h1 style={{fontSize:'40px',fontWeight:'bold'}}>{date}</h1>
      <button onClick={setTime}> Get Time</button>
    </React.Fragment>
  )
};

export default App;