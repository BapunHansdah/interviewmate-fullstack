import React from 'react'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import SignUp from './components/signup'
import InterviewerAdminPanel from './components/interviewerAdminPanel'
import UserAdminPanel from './components/userpanel'

import InterviewerProfile from './components/interviewerprofile'
import UserProfile from './components/userprofile'





import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

    return (
        <>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/interviewer-profile' element={<InterviewerProfile/>} />
            <Route path='/interviewer-panel' element={<InterviewerAdminPanel/>} /> 
            <Route path='/user-panel' element={<UserAdminPanel/>} />   
            <Route path='/user-profile' element={<UserProfile/>} />            
          </Routes>
        <Footer/>
      </BrowserRouter> 
      </>
    )
}

export default App