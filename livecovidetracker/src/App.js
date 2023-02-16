import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  // this is about textform.js
  const [mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert
      (
        {
          msg:message,
          type: type
        }     
      )
    
  }
  setTimeout(() => {
    setAlert(null);
  }, 1000);
  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#08254f';
      showAlert("Dark mode is enable","success")
      document.title='textutlis , Darkmode';

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable","success")
    }
  }

  return (
    <>
   <Navbar text="textutils" name="About"  mode={mode}  toggleMode={toggleMode}/>
   {/* {<Navbar/>} */}
   <Alert alert={alert}/>
   <div className="container">
   <BrowserRouter>
  <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyse: " mode={mode}/>} />       
          < Route path="/about" element={<About/>} />
            {/* element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} />  */}
    </Routes>
     </BrowserRouter>
   </div>
  </>
  );
}

export default App;