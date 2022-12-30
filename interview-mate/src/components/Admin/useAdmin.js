import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../useAuth'

export default ()=>{
 const [isAdmin,setIsAdmin] = useState(false)
 const [loading,setLoading] = useState(true)

 const {auth} = useAuth()

console.log(auth)
async function getSlotData(){
        try{
          if(auth.token){
             await axios.get('/api/admin/',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 console.log(res.data)
                 setIsAdmin(res.data.isAdmin)
                 setLoading(false)
             })
           }
        }catch(err){
           setIsAdmin(false)
           setLoading(false)
        }
     }
 useEffect(()=>{
    getSlotData()
 },[auth.token])

 return {loading,isAdmin}

}
