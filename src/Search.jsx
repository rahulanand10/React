import React, { useState } from 'react'
import Sresult from './Sresult';

const Search=()=>{
    const [img,setImg]=useState('')

    const  inputEvent=(event)=>{
        const data=event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <React.Fragment>
            <div className="searchbar">
                <input type="text" placeholder='Search Anything'
                value={img} 
                onChange={inputEvent}/>
                {img===''?null:<Sresult name={img}/>}
            </div>
        </React.Fragment>
    )
}

export default Search;