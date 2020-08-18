import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var name="binod"
const img1="https://picsum.photos/200/300" 
const img2="https://picsum.photos/210/300" 
const img3="https://picsum.photos/220/300" 
const links="https://picsum.photos"

const heading={
  color:'#fa9191',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px #ffe9c5',
  margin: '50px 0',
  fontFamily: "'Josefin Sans', sans-serif"
}
ReactDOM.render(
  <React.Fragment>
    <h1 style={heading }> Hello, My name is {name} </h1>
    <div className="img_div">
      <img src={img1} alt="randomimage" />
      <img src={img2} alt="randomimage" />
      <a href={links} target="_">
        <img src={img3} alt="randomimage" />
      </a>
    </div>
    </React.Fragment>,
    document.getElementById('root')
    );