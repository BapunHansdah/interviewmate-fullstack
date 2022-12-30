import {useState,useEffect} from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'


export default ()=>{
 const [auth,setAuth] = useState({isLoggedIn:false,token:""}) 
 const [loading,setLoading]  = useState(true)

 async function getToken(){
   try{
      const res1 = await axios.post("/api/auth/access",null).then(res=>{
         // console.log(res.data)
         setAuth({isLoggedIn:true,token:res.data.ac_token})
         setLoading(false)

     })
   }catch(err){
      // console.log(err.response.data.msg)
      setAuth({isLoggedIn:false,token:""})
      setLoading(false)

   }
}


 useEffect(()=>{
    getToken()
 },[])

 // if(!auth.isLoggedIn){
 //     return (
        
 //        <Navigate to="/login" ></Navigate>

 //      )
 // }

 return {auth,loading}

}

