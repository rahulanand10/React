import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
        <React.Fragment>
            <NavLink exact activeClassName="active_class" to='/'>Home</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'>Contact Us</NavLink>
            <NavLink exact activeClassName="active_class" to='/about'>AboutUs</NavLink>
            <br/>
            <a href="/">Home</a>
            <a href="/about">AboutUs</a>
            <a href="/contact">Contact</a>
        </React.Fragment>
    )

}
export default Navbar;