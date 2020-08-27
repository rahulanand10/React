import React from 'react'
import {Route,Switch} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar';

const App=()=>{
  const Name=()=>{
    return <h1>Name Page</h1>
  }
  return(
    <React.Fragment>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/contact/name' component={Name}/>
        <Route component={Error}/>
      </Switch>
    </React.Fragment>
  )
}
export default App;
