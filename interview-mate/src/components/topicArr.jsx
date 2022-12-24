import axios from 'axios'
import {useState,useEffect} from 'react'

export default function topicArr({id,name}){
    const [profileData,setProfileData] = useState({})
    const [loading,setLoading] = useState(true)
    async function getProfileData(){
         setLoading(true)
            try{
                 await axios.get(`api/public/${name}/${id}`).then(res=>{
                      setProfileData(res.data)
                      setLoading(false)
                 })
            }catch(err){
                console.log(err)
            }
         }
     useEffect(()=>{
        getProfileData()
     },[])

     if(loading){
        return <>loading...</>
     }
    return (
           <>
             {
                profileData.map((m,i)=>{
                    return(
                          <span key={m._id} className="bg-blue-500 px-2 py-1 text-white rounded">{m.title}</span>
                        )
                })
             }
           </>
        )
}