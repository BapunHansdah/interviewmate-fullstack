import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../useAuth'

export default ()=>{
 const [slotData,setSlotData] = useState([])
 const {auth} = useAuth()

async function getSlotData(){
        try{
          if(auth.token){
             await axios.get('/api/slot/',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setSlotData(res.data)
             })
           }
        }catch(err){
           console.log(err)
        }
     }
 useEffect(()=>{
    getSlotData()
 },[auth.token])

 return {slotData,setSlotData}

}
