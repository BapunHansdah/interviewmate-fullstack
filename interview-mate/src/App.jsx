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
import Admin from './components/Admin/main'
import NotFound from './components/notfound'
import Layout from './layout'
import Testing from './components/testing'
import ManageSlots from './components/manageSlots'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Main/>} />
              <Route path='/panel' element={<EditPanel/>} /> 
              <Route path='/search/:query' element={<SearchResult/>} />
              <Route path='/verify' element={<Verify/>} /> 
              <Route path='/profile/:name' element={<Profile/>} />  
              <Route path='/manage' element={<ManageSlots/>} />    
            </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/admin' element={<Admin/>} />
              <Route path='/error' element={<NotFound/>} />  
              <Route path='*' element={<NotFound/>} />    
              <Route path="testing" element={<Testing/>}/>      
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App