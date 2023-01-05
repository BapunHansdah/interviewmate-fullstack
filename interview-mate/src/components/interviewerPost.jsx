import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import TopicArr from './topicArr'
import {Link,useNavigate} from 'react-router-dom'




export default function InterviewerPost({loading,profileData}){



  if(loading){
  	return <>loading...</>
  }

 console.log(profileData)
// .filter((r)=> r.profileRating  >= filter.rating && r.minPrice <= parseInt(filter.price) && filter.level.includes(r.level) )
	return(	

		<>
		{
 profileData &&  profileData.length >0 ?   profileData.map((m,i)=>{
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
							     <div><span className="bg-orange-500 text-white text-center text-sm rounded px-1">{m.level}</span></div>
							     
							     <span className="flex items-center gap-2 text-xs text-gray-700">
							          {m.profileRating}<AiFillStar/>
							          {m.interviewed} interviewed
							     </span>
		            </div>
				   </div>
			    </div>
				<div className="">
					  <div className="">
					     <span className="">{`${m.minPrice}-${m.maxPrice}`}/hr</span>
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
		}) :<div className="text-center text-2xl">No Result..</div>
	}
	
</>
	)

}
