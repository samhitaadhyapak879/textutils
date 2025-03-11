import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert=(message,type)=>{
        setAlert(
          {
            msg:message,
            type:type
          }
        )
        setTimeout( ()=>{
          setAlert(null);

        },1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been enabled","success");
      // document.title='TextUtils - DarkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled","success");
      // document.title='TextUtils - LightMode';

    }
  }
  return (
    < >
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />

      <Alert alert={alert}/>

      <div className='container'>
      <Routes>
        <Route exact path="/about" element={<About mode={mode} /> } />
        <Route exact path="/" element={
          <TextForm heading="Try TextUtils - Word counter , Character counter , Remove extra spaces" showAlert={showAlert} mode={mode} /> }/>
      </Routes> 
     
      </div>
    </Router>


    </>
  );
}


export default App;
