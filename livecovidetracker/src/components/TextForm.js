import React , {useState} from 'react'

export default function TextForm(props) {
const handleUpclick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success")
}
const handleLowclick =()=>{
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("converted to lowercase","success")

}
const handleClearclick =()=>{
  let newText = '';
  setText(newText)
  props.showAlert("clear text","success")

}


const titleCaseHandler = () => {
    let newText = text.toUpperCase() + text.substr(1).toLowerCase();
    setText(newText);
    props.showAlert("converted to title case","success")

  };

  const handleRemoveSpecialCharcters = () => {
    let newText = text.replace(/[^a-zA-Z ]/g, "");
    setText(newText);
    props.showAlert("remove special charater","success")

  }

  const Reversebtn = () =>{
    let newText = text.split('').reverse().join('');
    setText(newText)
    props.showAlert("reverse order","success")

}

const handleOnChange= (event) =>{
setText(event.target.value)
}
const[text,setText]=useState("");
  return (
    <>
    <div className='container my-4' style={{color: props.mode ==='dark'?'white':'#08254f'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3" >
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control " value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}}id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase1</button>
<button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearclick}>clear text</button>
<button className="btn btn-primary mx-1" onClick={titleCaseHandler}>Title Case</button>
<button className="btn btn-primary mx-1" onClick={handleRemoveSpecialCharcters}> Remove special character</button>
<button className="btn btn-primary" onClick={Reversebtn}>Reverse</button>
</div>

<div className="container my-2" style={{color: props.mode ==='dark'?'white':'#08254f'}}>
  <h2 >Your text summary</h2>
  <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
  <p>{0.008*text.trim(" ").length} read minute</p>
  <h2 >preview</h2>
   <p>{text.length>0?text:"Enter something  in textbox to preview it here"}</p>
</div>

</>
  )
}
