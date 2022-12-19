

import {AiOutlineSchedule} from 'react-icons/ai'

import {BsFillArrowLeftSquareFill} from 'react-icons/bs'

import {BsFillArrowRightSquareFill} from 'react-icons/bs'

import moment from 'moment'



export default function InterviewerSlot({submitSlotData,handleChangeSlotData,decrementDate,incrementDate,slots,date,slotData,deleteSlot}){
    return(
         <>
          <form onSubmit={submitSlotData} className="w-full my-5 flex flex-col sm:flex-row gap-2">
             <input onChange={handleChangeSlotData}  className="border border-black" value={moment(slots.date).format("YYYY-MM-DD")} type="date" min={moment(new Date()).format("YYYY-MM-DD")} id="birthday" name="date" required={true}/>
             <input onChange={handleChangeSlotData} className="border border-black" value={slots.time} type="time" id="appt"  name="time" required={true}/>
             <button className="p-1 text-white bg-black flex items-center justify-center gap-2 hover:bg-opacity-80"><AiOutlineSchedule/>Add Schedule</button>
          </form>
          <div className="h-32 border shadow-inner bg-[#f3f3f3] overflow-y-auto mt-2 p-2">
          <div className="w-full grid grid-cols-3  md:grid-cols-6 gap-2">      
               {
                 slotData && slotData.map((s,i)=>{
                  if(s.date === moment(date).format("DD MMM YYYY")){
                    return (
                          <div key={i} className="px-2 py-1 w-full text-xs text-white hover:bg-opacity-90 rounded cursor-pointer bg-black flex justify-between">
                             <div>{s.time}</div>
                             <div className="px-2 hover:bg-red-500 text-white hover:text-white font-bold rounded-full transition-all" onClick={()=>deleteSlot(i)}>X</div>
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
      )
}