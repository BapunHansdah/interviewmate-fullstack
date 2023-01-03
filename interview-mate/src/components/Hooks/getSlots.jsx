import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../useAuth'
import moment from 'moment'
export default ()=>{
 const [slotData,setSlotData] = useState([])
 const {auth} = useAuth()
const [date, updateDate] = useState(moment(new Date()));


async function getSlotData(){
        try{
          if(auth.token){
             await axios.get(`/api/slot/${moment(date).format("DD MMM YYYY")}`,{
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
 },[auth.token,date])

 return {slotData,setSlotData,date, updateDate}

}
