import React from 'react';
import {add,sub,div,mult} from './Calculator'

function App(){
    return(
        <React.Fragment>
    <ol>
      <li>Sum of two no is{add(40,4)}</li>
      <li>Sub of two no is{sub(30,4)}</li>
      <li>Div of two no is{div(40,3)}</li>
      <li>Mult of two no is{mult(40,4)}</li>
     
    </ol>
  </React.Fragment>
    )
}
export default App;

