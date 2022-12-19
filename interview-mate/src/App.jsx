import React from 'react'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/Auth/login'
import SignUp from './components/Auth/signup'
import AdminPanel from './components/AdminPanel'
import Profile from './components/profile'
import SearchResult from './components/searchResultPage'
import Verify from './components/Auth/verify'







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
            <Route path='/profile' element={<Profile/>} />
            <Route path='/panel' element={<AdminPanel/>} /> 
            <Route path='/search' element={<SearchResult/>} />
            <Route path='/verify' element={<Verify/>} />  

          </Routes>
        <Footer/>
      </BrowserRouter> 
      </>
    )
}

export default App