import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineLink} from 'react-icons/ai'
import Reviews from './comments'



export default function InterviewerPost(){
	return(	
		<div className="p-5 border shadow max-w-[1000px] mx-auto mt-10">

    {/*-----------------------interviewer data ----------------------------------*/}

         <div className="flex w-full justify-between">
           <div className="flex gap-2 item-center flex-col sm:flex-row">

                <div className="">
			         <img className="w-20" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/>
		        </div>

			    <div className="">
					  <div className="flex flex-col gap-1">
					     <h3 className="font-bold cursor-pointer hover:text-gray-800">Interviewer name 1</h3>
               <div className="flex flex-col sm:grid sm:grid-cols-2  gap-1 sm:gap-4">
               <div className="font-bold text-xs">username</div>
               <div className="text-xs flex items-center gap-1"><CiLocationOn/>India</div>
               <div className="font-bold text-xs">30 <span className='font-normal'>Interview Attended</span></div>
					     <span className="flex items-center gap-2 text-xs">9.8/10<AiFillStar/></span>
               </div>
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
            <div className="text-sm flex items-center cursor-pointer"><AiOutlineLink/>Interviewer.com</div>
          </div>
           

          <div className="w-full mt-2">
            <p className="text-sm text-gray-700">hello world hello world hello world hello world hello world hello world hello world hello world...</p>
          </div>


          <div className="w-full mt-2">
            <h2 className="text-2xl">Topic Intersted</h2>
            <div className="text-xs grid grid-cols-2 md:grid-cols-6  gap-1 mt-2">
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">Front end</span>
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">Html/Css</span>
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">React</span>
                  <span className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">Javascript</span>
              </div>
          </div>
{/*-----------------------------------schedule--------------------------------------------------------*/}
          <div className="w-full mt-2">
            <button className="text-sm px-2 py-1 text-white bg-black flex items-center gap-2 hover:bg-opacity-80"><AiOutlineSchedule/>Slots</button>
          </div>

          <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-2 mt-2 border p-2">
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">2:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">1:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer bg-gray-500">12:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">11:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">2:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer bg-gray-500">1:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">12:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">11:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer bg-gray-500">2:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">1:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer bg-gray-500">12:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-black hover:text-white cursor-pointer">11:30 PM</span>
          </div>

          
{/*---------------------------reviews---------------------------------------*/}
          <div className="mt-5 border-t">
             <div className="flex text-3xl py-2 mt-5"><AiFillStar style={{color:"yellow"}}/><AiFillStar style={{color:"yellow"}}/><AiFillStar style={{color:"yellow"}}/><AiFillStar/><AiFillStar/></div>
             <div><textarea className="w-full p-2 border"  placeholder="add a review" /></div>
             <div className=""><button className="px-2 py-1 bg-black text-white">Submit</button></div>
          </div>

           <div className="mt-5">
            <h2 className="text-2xl">Reviews</h2>
             <div className="border p-2 flex flex-col gap-2 mt-4">
                <Reviews/>
                <Reviews/>
                <Reviews/>
                <Reviews/>
                <Reviews/>
             </div>
          </div>

		</div>
	)
}
