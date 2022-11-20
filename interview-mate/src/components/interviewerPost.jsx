import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {AiOutlineSchedule} from 'react-icons/ai'

export default function InterviewerPost(){
	return(	
		<div className="p-5 border shadow">
         <div className="flex w-full justify-between">
           <div className="flex gap-2 item-center ">

                <div className="">
			         <img className="w-20" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/>
		        </div>

			    <div className="">
					  <div className="flex flex-col gap-2">
					     <h3 className="font-semibold cursor-pointer hover:text-gray-800"><Link to="/interviewer-profile">Interviewer name 1</Link></h3>
					     <span className="flex items-center gap-2 text-xs text-gray-700">9.8/10<AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
            </div>
				</div>

			</div>

			<div className="">
				  <div className="">
				     $<span className="font-semibold">30/hr</span>
				  </div>
			</div>
          </div>
           

          <div className="w-full mt-2">
            <p className="text-sm text-gray-700">hello world hello world hello world hello world hello world hello world hello world hello world...</p>
          </div>
           <div className="text-xs grid grid-cols-2 md:grid-cols-6  gap-1">
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">Front end</span>
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">Html/Css</span>
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">React</span>
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">Javascript</span>
              </div>
           <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-2 mt-2 border p-2">
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">2:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">1:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">12:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">11:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">2:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">1:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">12:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">11:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">2:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">1:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">12:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">11:30 PM</span>
          </div>

          <div className="w-full mt-2">
            <button className="text-sm px-2 py-1 text-white bg-black flex items-center gap-2 hover:bg-opacity-80"><AiOutlineSchedule/>Schedule</button>
          </div>

		</div>
	)
}
