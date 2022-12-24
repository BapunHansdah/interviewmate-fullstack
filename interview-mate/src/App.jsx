import React from 'react'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/Auth/login'
import SignUp from './components/Auth/signup'
import EditPanel from './components/editPanel'
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
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            {/*<Route path='/profile' element={<Profile/>} />*/}
            <Route path='/panel' element={<EditPanel/>} /> 
            <Route path='/search' element={<SearchResult/>} />
            <Route path='/verify' element={<Verify/>} /> 
            <Route path='/profile/:name' element={<Profile/>} />   
          </Routes>
        <Footer/>
      </BrowserRouter> 
      </>
    )
}

export default App