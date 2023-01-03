import {AiOutlineSchedule} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'


export default function Info({info,maxPrice,minPrice}){
   
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
			                      {/*<div className="font-bold text-xs bg-red-500 text-center text-white rounded"></div>*/}

			                   <div className="flex flex-col sm:grid sm:grid-cols-2  gap-1 sm:gap-4">
			                      <div className="font-bold text-sm">{info.user.username}</div>
						          <h3 className="font-bold text-sm bg-orange-500 text-center text-white rounded">{info.level}</h3>
			                      <div className="font-bold text-sm">{info.role === "interviewer" ? info.interviewed :info.attended} <span className='font-normal'>{info.role === "interviewer" ? "Interviewed" :"Interview Attended"}</span></div>
			                      {info.location ? <div className="text-sm flex items-center gap-1"><MdLocationOn/>{info.location}</div> : <></>}
			                      {info.role === "interviewer" ? <span className="flex items-center gap-2 text-sm">{info.profileRating ? <> {info.profileRating}</> : <>No reviews yet</>}<AiFillStar/></span>:<></>}
			                   </div>

						   </div>
						</div>
					</div>
					<div className="">
					  { info.role === "interviewer" ? <span className="font-semibold">{`${info.minPrice}-${info.maxPrice}`}/hr</span>:<></>}
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