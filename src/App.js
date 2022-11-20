
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');
   const [alert, setAlert] = useState(null)

   const showAlert =(message, type)=>
   {
       setAlert(
        {
          msg:  message,
          type: type
        }
       );
       setTimeout(() => {
        setAlert(null)
       }, 2000);
   }

  const toggleDarkMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor ='#042743'
      document.body.style.color ='black'
      showAlert("Dark Mode Enabled","success")

    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor ='white'
      document.body.style.color ='black'
      showAlert("Light Mode Enabled","success")

    }
  }
  return (
    <>

<BrowserRouter>
<Navbar title ="Words Counter" AboutText ="About us" toggleDarkMode ={toggleDarkMode} mode ={mode}/>
         <Alert alert ={alert}></Alert>
      <Routes>
       <Route index element={<div className="container my-3">
      <TextForm showAlert ={showAlert} heading ="Enter Your Text in this Box" mode={mode}/>
     </div>} />
        <Route path="/about" element={<div className="container border-spacing-2">
      <About />
     </div>} />
      </Routes>
    </BrowserRouter>
     
     {/* <Navbar/> */}
     
     
     </>
  );
}

export default App;
