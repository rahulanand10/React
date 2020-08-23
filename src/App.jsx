import React,{useState} from 'react';

const App=()=>{

  const [name,setName]=useState();
  const [fullName,setFullName]=useState()
  const [lastName,setLastName]=useState()

  const [lastNewName,setLastNewName]=useState()
  const InputEvent=(event)=>{ 
    setName(event.target.value)
  }
  const InputEventTwo=(event)=>{
    setLastName(event.target.value)
  }
  const onSubmits=(event)=>{
    event.preventDefault();
    setFullName(name)
    setLastNewName(lastName)
  }
  return(
    <React.Fragment>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div className="nmain">
            <h1>Hello {fullName} {lastNewName}</h1> 
            <input type='text' placeholder="Enter Your Name"
            onChange={InputEvent} value={name}/>
            <br/>
            <input type='text' placeholder="Enter Your Last Name"
            onChange={InputEventTwo} value={lastName}/>
            <button>Click me</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default App;