import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import Reviews from './sections/read/comments'
import {useState,useEffect} from 'react'
import {DataJSON} from './Data'
import axios from 'axios'
import useGetUserInfo from './Hooks/getUserInfo'
import Infos from './sections/read/infos'
import Topic from './sections/intract/topic'
import Slot from './sections/intract/abc'
import getTopics from './Hooks/getTopics'
import getSlots from './Hooks/getSlots'
import {useParams} from 'react-router-dom'



export default function InterviewerPost(){

const {name} = useParams()


const [profileData,setProfileData] = useState({})

async function getProfileData(){
        try{
             await axios.get(`/api/public/profile/${name}`).then(res=>{
                  setProfileData(res.data)
             })
        }catch(err){
            console.log(err)
        }
     }
 useEffect(()=>{
    getProfileData()
 },[])




  
  if(profileData.user === undefined){
     return <>Loading..</>
  }


	return(	
		<div className="p-5 border shadow max-w-[1000px] mx-auto bg-white mt-10">
           <Infos info={profileData.info}/>
           <Topic info={profileData.topic}/>
         {
         profileData.user.roles.includes("user") ?
           <Slot info={profileData.slot}/>:<></>
         }
		</div>
	)
}
