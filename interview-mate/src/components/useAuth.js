import {useState,useEffect} from 'react'
import axios from 'axios'
import {get_Token,get_UserInfo} from '../actions/index'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


export default ()=>{
 const [auth,setAuth] = useState({isLoggedIn:false,token:""})  
 const dispatch = useDispatch()
 const navigate = useNavigate()

 async function getToken(){
   try{
      const res1 = await axios.post("/api/auth/access",null).then(res=>{
         setAuth({isLoggedIn:true,token:res.data.ac_token})
     })
   }catch(err){
      console.log(err)
      setAuth({isLoggedIn:false,token:""})
      navigate('/sign')
   }
}


 useEffect(()=>{
    getToken()
 },[])

 return {auth}

}

