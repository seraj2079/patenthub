import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import SignUp from './SignUp';
import Login from './Login';
import Registration from './Registration';
import Contact from './Contect';
import Landing from './Landing';
import Dash_Home from './Dash_Home';
import Dash_About from './Dash_About';
import Main_About from './Main_About';
import Main_Patent from './Main_Patent';
import Dash_Patent from './Dash_Patent';
import Login_Dash from './Login_Dash';



const MyMap = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/dashboard' element={<Login_Dash/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={<Landing/>}/>
        <Route path='/about' element={<Main_About/>}/>
        <Route path='/patent' element={<Main_Patent/>}/>
        <Route path='/dash-home' element={<Dash_Home/>}/>
        <Route path='/dash-about' element={<Dash_About/>}/>   
        <Route path='/dash-patent' element={<Dash_Patent/>}/>
    </Routes>
    </>
  )
}

export default MyMap;