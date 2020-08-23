import React,{useState} from 'react';

const App=()=>{

  const [fullName,setFullName]=useState({
    fname:'',
    lname:'',
    email:'',
    phone:''
  });


  const InputEvent=(event)=>{ 
    console.log(event.target.value)
    console.log(event.target.name)

    const {name,value}=event.target

    setFullName((preValue)=>{

      return{
        ...preValue,
        [name]:value,
      }
      // console.log(preValue)
      // if(name === "fname"){
      //   return{
      //     fname:value,
      //     lname:preValue.lname,
      //     email:preValue.email,
      //     phone:preValue.phone
      //   };
      // }else if(name === "lname"){
      //   return{
      //     fname:preValue.fname,
      //     lname:value,
      //     email:preValue.email,
      //     phone:preValue.phone
      //   };
      // }else if(name === "email"){
      //   return{
      //     fname:preValue.fname,
      //     lname:preValue.lname,
      //     email:value,
      //     phone:preValue.phone
      //   };
      // }else if(name === "phone"){
      //   return{
      //     fname:preValue.fname,
      //     lname:preValue.lname,
      //     email:preValue.email,
      //     phone:value,
      //   };
      // }
    })
  }
 
  const onSubmits=(event)=>{
    event.preventDefault();
    alert('form submitted')
  }

  return(
    <React.Fragment>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div className="nmain">
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            
            <input type='text' placeholder="Enter Your Name"
            name="fname"
            onChange={InputEvent} 
            value={fullName.fname}
            />
            <br/>
            <input type='text' placeholder="Enter Your Last Name"
            name="lname"
            onChange={InputEvent} 
            value={fullName.lname}
            />
            <br/>
            <input type='email' placeholder="Enter Your Email"
            name="email"
            onChange={InputEvent} 
            value={fullName.email}
            />
            <br/>
            <input type='number' placeholder="Enter Your Number"
            name="phone"
            onChange={InputEvent} 
            value={fullName.phone}
            />
            <button>Click me</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default App;