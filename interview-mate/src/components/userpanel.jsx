import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdEditLocationAlt} from 'react-icons/md'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import Reviews from './comments'
import InterviewerEarnings from './interviewerEarnings'
import UserPanelSchedule from './userPanelSchedule'


export default function UserAdminPanel(){
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
    

{/*--------------------------------interview list ----------------------------------------------*/}

          <div>
            <UserPanelSchedule/>
          </div>

{/*------------------------------------interviewer earnings------------------------------------*/}

     


{/*---------------------------reviews---------------------------------------*/}
          

		</div>
	)
}
