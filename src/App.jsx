import React,{useState} from 'react';



const App=()=>{
  const [bg,setBg]=useState('purple')
  const[name,setName]=useState('Click me');
  const bgChange=()=>{
    setBg('#34495e')
    setName('OUCH!! 😢')
  }
  const dbChange=()=>{
    setBg('purple')
    setName('Ayyo !! 😠')
  }
  return(
    <React.Fragment>
      <div style={{backgroundColor:bg }}>
        <button onClick={bgChange} onDoubleClick={dbChange}> {name} </button>
      </div>
    </React.Fragment>
  )
}

export default App;