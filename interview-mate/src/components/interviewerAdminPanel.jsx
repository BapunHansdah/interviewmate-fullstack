import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdEditLocationAlt} from 'react-icons/md'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import Reviews from './comments'
import InterviewerEarnings from './interviewerEarnings'
import InterviewPanelSchedules from './interviewPanelSchedules'


export default function InterviewerAdminPanel(){
	return(	
		<div className="p-5 border shadow max-w-[1000px] mx-auto mt-10">

    {/*-----------------------interviewer data ----------------------------------*/}

         <div className="flex w-full justify-between">
           <div className="flex flex-col gap-2 item-center ">

                <div className="">
			         <img className="w-20" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/>
		        </div>

			    <div className="max-w-sm">
			             <label className="my-2 font-semibold">
			                Username
			             </label>
					         <input className="my-1 w-full p-1 border" value="interviewer name" />
					         <label className="my-2 font-semibold">
			                Price/hr
			             </label>
				          <input className="my-1 w-full border p-1" value="30" />
                  <label className="my-2 font-semibold">
                            Location
                  </label>
                  <input className="my-1 w-full border p-1" value="india" />
				</div>
			</div>
    </div>
           

          <div className="w-full mt-1">
            <label className="my-2 font-semibold">
			       Bio
			</label>
            <textarea className="text-sm text-gray-700 w-full p-1 border h-32" value="hello world hello world hello world hello world hello world hello world hello world hello world..."/>
          </div>


          <div><button className="px-2 py-1 text-sm bg-black text-white">Save</button></div>

          <div className="pb-10 border-b"></div>

{/*-----------------------------------schedule--------------------------------------------------------*/}
          <div className="mt-2">
             <h1 className='text-2xl'>Add Slots</h1>
          </div>

          
          <form className="w-full my-5 flex flex-col md:flex-row gap-2">
             <input  className="border" type="date" min="2022-11-20" id="birthday" name="birthday"/>
             <input type="time" id="appt"  name="appt"/>
             <button className="text-sm px-2 py-1 text-white bg-black flex items-center gap-2 hover:bg-opacity-80"><AiOutlineSchedule/>Add Schedule</button>
          </form>


          

          <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-2 mt-2 border p-2">
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-orange-500 hover:text-white cursor-pointer bg-orange-500">2:30 PM</span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-red-500 hover:text-white cursor-pointer bg-red-500">1:30 PM </span>
            <span className="px-2 py-1 text-xs text-gray-700 bg-opacity-60 border rounded hover:bg-green-500 hover:text-white cursor-pointer bg-green-500">12:30 PM</span>
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

          <div className="mt-2 flex gap-2 justify-center relative items-center">
            <button className="text-gray-700 absolute pr-32"> <BsFillArrowLeftSquareFill/> </button><h1 className='text-sm font-semibold'>13th Nov 2022</h1><button className="text-gray-700 absolute pl-32"><BsFillArrowRightSquareFill/></button>
          </div>

{/*--------------------------------interview list ----------------------------------------------*/}

          <div>
            <InterviewPanelSchedules/>
          </div>

{/*------------------------------------interviewer earnings------------------------------------*/}

      <div>
         <InterviewerEarnings />
      </div>


{/*---------------------------reviews---------------------------------------*/}
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
