import {AiOutlineSchedule} from 'react-icons/ai'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import moment from 'moment'


import List from '../../Utils/list'

export default function InterviewerSlot({loading,submitSlotData,handleChangeSlotData,decrementDate,incrementDate,slots,date,slotData,deleteSlot,setSlotData}){

    return(
         <>
          <form onSubmit={submitSlotData} className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
             <label>Date</label>
             <input onChange={handleChangeSlotData}  className="border border-black px-2 py-1" value={moment(slots.date).format("YYYY-MM-DD")} type="date" min={moment(new Date()).format("YYYY-MM-DD")} id="birthday" name="date" required={true}/>
             <label>Time </label>
             <input onChange={handleChangeSlotData} className="border border-black px-2 py-1" value={slots.time} type="time" id="appt"  name="time" required={true}/>
             <label>Price (inr)</label>
             <input onChange={handleChangeSlotData}  className="border border-black px-2 py-1" type="number" min="0" max="1000" value={slots.price} placeholder="Price in inr" name="price"/>
             <label>Duration (min)</label>
             <input onChange={handleChangeSlotData}  className="border border-black px-2 py-1" type="number" min="15" value={slots.duration} placeholder="Duration in min" name="duration"/>
             <button className="p-1 text-white bg-black flex items-center justify-center gap-2 hover:bg-opacity-80"><AiOutlineSchedule/>Add Schedule</button>
          </form>
              <List data={slotData} date={date} setData={setSlotData} name={"slot"}/>
           <div className="mt-2 flex gap-2 justify-center relative items-center">
            <button onClick={decrementDate} className={`text-black ${ date >= new Date() ?"opacity-100" :"opacity-50"}  absolute mr-32 border`}> <BsFillArrowLeftSquareFill/></button>
            <h1 className='text-sm font-semibold'>{moment(date).format("DD MMM YYYY")}</h1>
            <button onClick={incrementDate} className="text-black absolute ml-32"><BsFillArrowRightSquareFill/></button>
          </div>
          <div className="h-5"></div>
           <div className="px-2 mt-2">
               <span className="text-md bg-blue-500 text-white px-2 font-bold">NOTES</span>
               <h1 className="bg-gray-100 text-green-700 px-2 py-1 font-semibold text-sm">1. Make more free slots to increase profile ratings.</h1>
               {/*<h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">2. You can not price slot more than 1000 unless you are verified interviewer</h1>*/}
               {/*<h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">3. To become a verified interviewer, you must interview at least 1000 people with ratings higher than 3.5.</h1>*/}
               <h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">2. You can't delete booked slots!!</h1>
               <h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">3. Unapproved slots will be deleted after 24 hours and returned money to the interviewee</h1>
               {/*<h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">4. You can create only 25 slots per week in free version </h1>*/}
           </div>
         </>
      )
}