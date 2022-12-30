import {AiOutlineSchedule} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'


export default function Info({info,userReviewed,slot}){


    const a = slot.reduce((acc,obj)=>{
    	if(obj.completed === true){
    		acc.completed += 1
    		acc.rating = acc.rating + obj.rating
    	}
    	return acc
    },{completed:0,rating:0})
     
    console.log(slot,a)
    
   // return null
	return (
        <div>
		         <div className="flex w-full justify-between">

		           <div className="flex gap-2 item-center flex-col sm:flex-row">
					    <div className="">
						   <div className="flex flex-col gap-1">
						      <div className="">
				                 <img className="w-20" src={info.avatar}/>
			                  </div>
			                  <div>
			                     <span className="bg-red-500 text-white px-1 rounded">{info.role}</span>
			                  </div>
						      <h3 className="font-bold cursor-pointer hover:text-gray-800">{info.fullname}</h3>
			                   <div className="flex flex-col sm:grid sm:grid-cols-2  gap-1 sm:gap-4">
			                      <div className="font-bold text-xs">{info.user.username}</div>
			                      <div className="font-bold text-xs">{info.role==='interviewer' ? a.completed :userReviewed.length} <span className='font-normal'>Interview Attended</span></div>
			                      {info.location ? <div className="text-xs flex items-center gap-1"><MdLocationOn/>{info.location}</div> : <></>}
			                      {info.role === "interviewer" ? <span className="flex items-center gap-2 text-xs">{a.completed ? <> {(a.rating/a.completed).toFixed(1)}/5 </> : <>No reviews yet</>}<AiFillStar/></span>:<></>}
			                   </div>
						   </div>
						</div>
					</div>
					<div className="">
						<div className="">
						    $<span className="font-semibold">{info.price ? info.price: 0}/hr</span>
						</div>
					</div>
		        </div>
	            <div className="w-full mt-2">
	                {info.website ? <div className="text-sm flex items-center cursor-pointer"><AiOutlineLink/><a href={info.website} target="_blank">{info.website}</a></div>: <></>}
	            </div>
				<div className="w-full mt-2">
				   {info.bio ?<p className="text-sm text-gray-700">{info.bio}</p>:<></>}
				</div>
        </div>
		)
}