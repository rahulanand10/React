import React from 'react';
import ReactDOM from 'react-dom';
import myfav ,{favprog,myName,myNames} from './App'
ReactDOM.render(
  <React.Fragment>
    <ol>
      <li>{myfav}</li>
      <li>{favprog}</li>
      <li>{myName()}</li>
      <li>{myNames()}</li>
    </ol>

  </React.Fragment>,
  document.getElementById('root')
)