import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../../useAuth'

export default ()=>{
 const [bookedData,setBookedData] = useState([])
 const {auth} = useAuth()
 const [loading,setLoading] = useState(true)

async function getBookedData(){
        try{
          if(auth.token){
             await axios.get('/api/admin/bookedslots',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setBookedData(res.data)
                 setLoading(false)
             })
           }
        }catch(err){
           console.log(err)
           setLoading(false)

        }
     }
 useEffect(()=>{
    getBookedData()
 },[auth.token])

 return {bookedData,setBookedData,loading}

}
