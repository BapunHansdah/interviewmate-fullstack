import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../useAuth'

export default ()=>{
 const [topicData,setTopicData] = useState([])
 const {auth} = useAuth()

async function getSlotData(){
        try{
          if(auth.token){
             await axios.get('/api/topic/',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setTopicData(res.data)
             })
           }
        }catch(err){
           console.log(err)
        }
     }
 useEffect(()=>{
    getSlotData()
 },[auth.token])

 return {topicData,setTopicData}

}
