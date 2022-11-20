
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineLink} from 'react-icons/ai'


export default function Userprofile(){
	return(
		<div className="min-h-[100vh]">
		   		<div className="p-5 border shadow max-w-[1000px] mx-auto mt-10">

    {/*-----------------------interviewer data ----------------------------------*/}

         <div className="flex w-full justify-between">
           <div className="flex flex-col md:flex-row gap-2 item-center">

                <div className="">
			         <img className="w-20" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/>
		        </div>

			    <div className="">
					  <div className="flex flex-col gap-1">
					     <h3 className="font-bold cursor-pointer hover:text-gray-800">User name 1</h3>
                         <div className="flex flex-col sm:grid sm:grid-cols-2  gap-1 sm:gap-4">
                         <div className="font-bold text-xs">username</div>
                         <div className="text-xs flex items-center gap-1"><CiLocationOn/>India</div>
                         <div className="font-bold text-xs">30 <span className='font-normal'>Interview Attended</span></div>
					     <span className="flex items-center gap-2 text-xs">30 Points</span>
                         </div>
					  </div>
				</div>

			</div>
    </div>


          <div className="w-full mt-2">
            <div className="text-sm flex items-center cursor-pointer"><AiOutlineLink/>user.com</div>
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

		</div>
		</div>
		)
}





