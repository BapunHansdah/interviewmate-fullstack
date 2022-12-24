import {useState,useEffect} from 'react'
import axios from 'axios'
// import {useNavigate} from 'react-router-dom'


export default ()=>{
 const [auth,setAuth] = useState({isLoggedIn:false,token:""}) 
 const [loading,setLoading]  = useState(true)
 // const navigate = useNavigate()

 async function getToken(){
   try{
      const res1 = await axios.post("/api/auth/access",null).then(res=>{
         setAuth({isLoggedIn:true,token:res.data.ac_token})
         setLoading(false)

     })
   }catch(err){
      console.log(err.response.data.msg)
      setAuth({isLoggedIn:false,token:""})
      setLoading(false)
      // navigate('/login')
   }
}


 useEffect(()=>{
    getToken()
 },[])

 return {auth,loading}

}

