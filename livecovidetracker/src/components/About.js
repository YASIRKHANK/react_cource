import React from 'react'

export default function About(props) {

// the comented code is all about a btn
// const [myStyle,setMystyle]=useState(
//   {
//     color:'black',
//     backgroundColor:'white',
//   })


// const [btntext,setBtnText]=useState("Enable dark mode")

//  const ToggleStyle=()=>{
//   if(myStyle.color === 'black'){
//     setMystyle({
//       color:'white',
//       backgroundColor:'black',
//     border:'1px solid white'

//     })

// setBtnText("Enable light mode")

//   }
//   else{
//     setMystyle({
//       color:'black',
//       backgroundColor:'white'
//     })
//     setBtnText("Enable dark mode")


//   }
// }

let myStyle = {
   color: props.mode==='dark'?'white':'#042743',
   backgroundColor: props.mode==='dark'? '#042743' :'white',
   border: '2px soild',
   borderColor:props.mode==='dark'?'white':'#042743',
}

  return (
    <div className="container my-4" style={{ color: props.mode==='dark'?'white':'#042743'}}>
    <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Textutlis give you a waya to Analyazie your text quickly and efficiently.be it word count. charcatr count are
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Textutilze is a free charater counter tool that providen instant charter  count & word count static for a given text.
        text utils report the number of word and chacter. thus it is suitable for writing text  with word/charcter limit    </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compitable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      this word  counter software  work in any browser  such as chrome ,firfox,internet expolr, safari ,opera.
      it suit to count charcter  in facbook,blog, books,excel document,pdf document,essay,etc
      </div>
    </div>
  </div>
  {/* <div className="container my-4">
  <button type="button" onClick={ToggleStyle} className="btn btn-primary">{btntext}</button>
  </div> */}
</div>
    </div>
  )
}
