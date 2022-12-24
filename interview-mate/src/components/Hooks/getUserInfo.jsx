import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../useAuth'

export default ()=>{
 const [info,setInfo] = useState({})
 const [loading,setLoading] = useState(true)
 const {auth} = useAuth()

async function getUserData(){
     setLoading(true)
        try{
          if(auth.token){
             await axios.get('/api/user/me',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setInfo(res.data)
                 setLoading(false)
             })
           }
        }catch(err){
           console.log(err)
           setLoading(false)
        }
     }
 useEffect(()=>{
    getUserData()
 },[auth.token])

 return {info,setInfo,loading,auth}

}
