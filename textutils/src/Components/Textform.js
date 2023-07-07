// import React ,{useState} from 'react'
import React, { useState } from 'react';

// const [Text,setText]=useState('set text here');
export default function Textform(props) {
  const handleupclick=()=>{
    console.log("convert into uppercase")
    let newtext=text.toUpperCase()
    // setText("you clicked on upclick")
    setText(newtext)
  }
  const handleonchange=(event)=>{
    console.log("handle on change");
    setText(event.target.value)
  }
  const handleLoclick=(event)=>{
    console.log("convert into lowercase")
    let newtext=text.toLowerCase()
    // setText("you clicked on upclick")
    setText(newtext)
  }
  const handleClearclick=(event)=>{
    console.log("this can clear the page")
    let newtext=''
    setText(newtext)
  }
  const [text, setText] = useState("enter text here 2");
  // setText("hello change like this");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" id="mybox" rows="9" value={text} onChange={handleonchange}></textarea>
</div>
 <button className="btn btn-primary" onClick={handleupclick}>convert to uppercase </button>
 <button className="btn btn-primary mx-3" onClick={handleLoclick}>convert to lowercase </button>
 <button className="btn btn-primary mx-3" onClick={handleClearclick}>clear </button>
    </div>
    <div className="container my-1000">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words are {text.length} there</p>
      <p>{0.008* text.split(" ").length} minutes</p>
      <h4>preview</h4>
      <p>{text}</p>
    </div>
    </>
  )
}
