import React,{useState} from 'react';


const App=()=>{
  let curr=new Date().toLocaleTimeString()
  const [time,set]=useState(curr);
  setInterval(() => {
    let curr=new Date().toLocaleTimeString()
    set(curr)
  }, 1000);

  return(
    <React.Fragment>
      <h1 style={{fontSize:'60px',fontWeight:'bold'}}>{time}</h1>
    </React.Fragment>
  )
};

export default App;