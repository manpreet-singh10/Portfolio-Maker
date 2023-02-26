import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import "./App.css";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={[<Header/>,<Body/>]} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
