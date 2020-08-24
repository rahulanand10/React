import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App=()=>{
  const[inputList,setInputList]=useState()
  const [Items,setItems]=useState([])

  const itemEvent=(event)=>{
    setInputList(event.target.value)
  }

  const listofItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    })
    setInputList('')
  }
  const deleteItem=(id)=>{
    console.log('del')
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!== id;
      })
    })
  }
  return(
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a Item" 
          value={inputList}
          onChange={itemEvent}/>
          <button onClick={listofItems}>+</button>

          <ol>
            {Items.map((itemval,index)=>{
              return  <ToDoLists key={index} text={itemval} id={index}
              onSelect={deleteItem}/>;
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;