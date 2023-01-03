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
import swal from 'sweetalert2'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
import moment from 'moment'

export default function InterviewerPost(){

const {name} = useParams()


const [date, updateDate] = useState(moment(new Date()));
const [profileData,setProfileData] = useState({})
const [loading,setLoading] = useState(true)
const [availSlots,setAvailSlots] = useState([])

async function getProfileData(){
        try{
             await axios.get(`/api/public/profile/${name}/${moment(date).format("DD MMM YYYY")}`).then(res=>{
                  console.log(res.data)
                  setLoading(false)
                  setProfileData(res.data)
                  setAvailSlots(res.data.slot)
             })
        }catch(err){
            console.log(err)
            setLoading(false)
            swal.fire(err.response.data.msg)
        }
     }
 useEffect(()=>{
    getProfileData()
 },[name,date])




  
  if(loading){
     return <>Loading..</>
  }

  console.log(profileData)

  // return null

	return(	
		<div className="p-5 border shadow max-w-[1000px] mx-auto bg-white mt-10">
          <Infos info={profileData.info} slot={profileData.slot} userReviewed={profileData.userReviewed} minPrice={profileData.minPrice} maxPrice={profileData.maxPrice} />
          <Topic info={profileData.info.topic}/>
         {
         profileData.info.role==="interviewer" ?
           <Slot info={profileData.slot} date={date} updateDate={updateDate} availSlot={availSlots} setAvailSlot={setAvailSlots} bio={profileData.info} topic={profileData.info.topic}/>:<></>
         }
         {
         profileData.info.role==="interviewer" ?
            <Reviews info={profileData.review} /> :<></>
         }
		</div>

	)
}
