import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import Reviews from './comments'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import moment from 'moment'
import {useState,useEfffect} from 'react'
import {DataJSON} from './Data'


export default function InterviewerPost(){
    
const [date, updateDate] = useState(moment(new Date()));

//changing the date in slot
  const incrementDate = () => {
    updateDate(moment(date).add(1, "day"));
  };
  
  const decrementDate = () => {
     if(date <= new Date() ){
        return ;
     }
    updateDate(moment(date).subtract(1, "day"));
  };


	return(	
		<div className="p-5 border shadow max-w-[1000px] mx-auto bg-white mt-10">

    {/*-----------------------interviewer data ----------------------------------*/}

         <div className="flex w-full justify-between">
           <div className="flex gap-2 item-center flex-col sm:flex-row">

                <div className="">
			           <img className="w-20" src={DataJSON.profile_pic}/>
		          </div>

			    <div className="">
					  <div className="flex flex-col gap-1">
					     <h3 className="font-bold cursor-pointer hover:text-gray-800">{DataJSON.info.fullname}</h3>
               <div className="flex flex-col sm:grid sm:grid-cols-2  gap-1 sm:gap-4">
                   <div className="font-bold text-xs">{DataJSON.username}</div>
                   <div className="text-xs flex items-center gap-1"><MdLocationOn/>{DataJSON.info.location}</div>
                   <div className="font-bold text-xs">{DataJSON.interviews} <span className='font-normal'>Interview Attended</span></div>
					         {
                   DataJSON.user_role === "interviewer" ?
                   <span className="flex items-center gap-2 text-xs">{DataJSON.rating}/10<AiFillStar/></span>:
                   <></>
                   }
               </div>
					  </div>
				</div>

			</div>

			<div className="">
				  <div className="">
				     $<span className="font-semibold">{DataJSON.info.price}/hr</span>
				  </div>
			</div>
    </div>


          <div className="w-full mt-2">
            <div className="text-sm flex items-center cursor-pointer"><AiOutlineLink/>{DataJSON.info.website}</div>
          </div>
           

          <div className="w-full mt-2">
            <p className="text-sm text-gray-700">{DataJSON.info.bio}</p>
          </div>


          <div className="w-full mt-2">
            <h2 className="text-xl">Topic Intersted</h2>
            <div className="text-xs grid grid-cols-2 md:grid-cols-6  gap-1 mt-2">
                 { 
                  DataJSON.topicdata.map((topic,index)=>{
                    return (
                        <span key={index} className="text-gray-700 flex justify-center bg-white bg-orange-200 p-1">{topic}</span>
                      )
                  })

                 }                   
              </div>
          </div>
{/*-----------------------------------schedule--------------------------------------------------------*/}
{
   DataJSON.user_role === "interviewer" ?
         <>
          <div className="w-full mt-2">
            <h2 className="text-xl">Slots</h2>            
          </div>


          <div className="h-32 border shadow-inner bg-[#f3f3f3] overflow-y-auto mt-2 p-2">
          <div className="w-full grid grid-cols-3  md:grid-cols-6 gap-2">      
               {
                 DataJSON.slotdata && DataJSON.slotdata.map((s,i)=>{
                  if(s.date === moment(date).format("DD MMM YYYY")){
                    return (
                          <div key={i} className="px-2 py-1 w-full text-xs text-white hover:bg-opacity-90 rounded cursor-pointer bg-black flex justify-between">
                             <div>{s.time}</div>
                          </div>
                      )
                  }
                 })
               }
            </div>
            </div>
              <div className="mt-2 flex gap-2 justify-center relative items-center">
            <button onClick={decrementDate} className={`text-black ${ date >= new Date() ?"opacity-100" :"opacity-50"}  absolute mr-32 border`}> <BsFillArrowLeftSquareFill/></button>
            <h1 className='text-sm font-semibold'>{moment(date).format("DD MMM YYYY")}</h1>
            <button onClick={incrementDate} className="text-black absolute ml-32"><BsFillArrowRightSquareFill/></button>
          </div>
          </>
          :
          <></>

}
          
{/*---------------------------reviews---------------------------------------*/}
{
   DataJSON.user_role === "interviewer" ?
         <>
           <div className="mt-5">
            <h2 className="text-2xl">Reviews</h2>
             <div className="border p-2 flex flex-col gap-2 mt-4">
                <Reviews reviewData = {DataJSON.reviews}/>
             </div>
          </div>
          </>
          :
          <></>

}

		</div>
	)
}
