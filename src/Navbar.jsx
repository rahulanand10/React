import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
        <React.Fragment>
            <div className="nav">
                <NavLink exact activeClassName="active_class" className="link" to='/'>Home</NavLink>
                <NavLink exact activeClassName="active_class" className="link" to='/contact'>Contact Us</NavLink>
                <NavLink exact activeClassName="active_class" className="link" to='/about'>AboutUs</NavLink>
                <NavLink activeClassName="active_class" className="link" to='/user'>User</NavLink>
            </div>
        </React.Fragment>
    )

}
export default Navbar;