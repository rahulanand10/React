import React from 'react';
import Amazon from './Amazon'
import './index.css'
import Netflix from './Netflix';

const favSeries='amazon'
const Favs=()=>{
if (favSeries==='netflix'){
    return (<Netflix/>)
}
else{
  return(<Amazon/>)
}
}

const App=()=>{
  return(
    <React.Fragment>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    <Favs/>
  </React.Fragment>
  )
}

export default App;