import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../../useAuth'

export default ()=>{
 const [userListData,setUserListData] = useState([])
 const [loading,setLoading] = useState(true)
 const {auth} = useAuth()

async function getUserListData(){
        try{
          if(auth.token){
             await axios.get('/api/admin/users',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setUserListData(res.data)
                 setLoading(false)
             })
           }
        }catch(err){
           console.log(err)
           setLoading(false)
        }
     }
 useEffect(()=>{
    getUserListData()
 },[auth.token])

 return {userListData,setUserListData,loading}

}
