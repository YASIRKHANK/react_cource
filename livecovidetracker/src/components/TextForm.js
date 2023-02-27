import React , {useState} from 'react'

export default function TextForm(props) {
const handleUpclick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success");
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
const copyCaseHandler = () =>{
  navigator.clipboard.writeText(text)
  props.showAlert("rcopy text","success")

}


const handleOnChange= (event) =>{
setText(event.target.value)
}
const[text,setText]=useState("");
  return (
    <>
    <div className='container my-4' style={{color: props.mode ==='dark'?'white':'#08254f'}}>
        <h1 className='mb-3'>{props.heading}</h1>
    <div className="mb-3" >
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control " value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode ==='dark'?'#2f3359':'white',color:props.mode ==='dark'?'white':'black'}}id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleLowclick}>Convert to lowercase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleClearclick}>clear text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={titleCaseHandler}>Title Case</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={handleRemoveSpecialCharcters}> Remove special character</button>
<button disabled={text.length===0} className="btn btn-primary" onClick={Reversebtn}>Reverse</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1  my-1" onClick={copyCaseHandler}>Copy Text</button>
</div>

<div className="container my-2" style={{color: props.mode ==='dark'?'white':'#08254f'}}>
  <h2 >Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} read minute</p>
  <h2 >preview</h2>
   <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>

</>
  )
}
