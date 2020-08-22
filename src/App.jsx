import React from 'react';

import SlotM from './SlotMach'
const App=()=>{
  return(
    <React.Fragment>
      <h1 className="heading_style">
      <span>🎰</span> Welcome to  Slot machine game <span>🎰</span>
      </h1>
      <SlotM x='😄' y='😄' z='😄'/>
      <SlotM x='😄' y='😄' z='😄'/>
      <SlotM x='😄' y='🎅' z='😄'/>
    </React.Fragment>
  )
};
export default App;