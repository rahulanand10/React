import React from 'react'

const ToDoLists=(props)=>{

    return (
        <React.Fragment>
            <div className="todo_style">
                <i className="fa fa-times" 
                aria-hidden="true"
                onClick={()=>{
                    props.onSelect(props.id)
                }}
                ></i>
                <li>{props.text}</li>
            </div>

        </React.Fragment>
    )
}

export default ToDoLists