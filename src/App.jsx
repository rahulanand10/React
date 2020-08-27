import React from 'react'
import {Route,Switch} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar';
import User from "./User";
import Search from './Search'

const App=()=>{
  const Name=()=>{
    return <h1>Name Page</h1>
  }
  return(
    <React.Fragment>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/about' component ={()=><About name="About"/>}/>
        <Route exact path='/contact' render={()=><Contact name="Contact"/>}/>
        <Route exact path='/contact/name' component={Name}/>
        <Route exact path='/user/:fname/:lname' component={User}/>
        <Route component={Error}/>
      </Switch>
    </React.Fragment>
  ) 
}
export default App;
