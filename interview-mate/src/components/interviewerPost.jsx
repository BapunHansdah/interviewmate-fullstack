import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import axios from 'axios'
import TopicArr from './topicArr'
import {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Rating from './rating'


export default function InterviewerPost({query}){

const [profileData,setProfileData] = useState({})
const [loading,setLoading] = useState(true)

async function getProfileData(){
	   setLoading(true)
        try{
             await axios.get(`/api/public/feed/${query}`).then(res=>{
                  setProfileData(res.data)
                  setLoading(false)
             })
        }catch(err){
            console.log(err)
            setLoading(false)
        }
     }
 useEffect(()=>{
    getProfileData()
 },[])
  if(loading){
  	return <>loading...</>
  }

 

	return(	
		<>
		{
   profileData.user && profileData.user.map((m,i)=>{
			return (

		<div className="p-5 border shadow bg-white" key={m._id}>
         <div className="flex w-full justify-between">
           <div className="flex flex-col md:flex-row gap-2 item-center ">
                <div className="">
			             <img className="w-20" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/>
		            </div>

			     <div className="">
							  <div className="flex flex-col gap-2">
							     <h3 className="cursor-pointer hover:text-gray-800"><Link to={`/profile/${m.user.username}`}>{m.fullname}</Link></h3>
							     <span className="flex items-center gap-2 text-xs text-gray-700">
							          <Rating id={m.user._id}/><AiFillStar/>
							     </span>
		            </div>
				   </div>
			    </div>
					<div className="">
						  <div className="">
						     $<span className="">30/hr</span>
						  </div>
					</div>
          </div>
           

          <div className="w-full mt-2">
            <p className="text-sm text-gray-700">{m.bio}</p>
          </div>
          <div className="text-xs flex flex-wrap gap-1 mt-2">
      
          	<TopicArr topic={m.topic} />
         
          </div>
          <div className="w-full mt-2">
            <button className="text-sm px-2 py-1 text-white bg-black flex items-center gap-2 hover:bg-opacity-80"><AiOutlineSchedule/><Link to={`/profile/${m.user.username}`}>Request/Schedule</Link></button>
          </div>
		</div>

				)
		}) 
	}
</>
	)

}
