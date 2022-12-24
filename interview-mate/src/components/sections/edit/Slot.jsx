import {AiOutlineSchedule} from 'react-icons/ai'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import moment from 'moment'


import List from '../../Utils/list'

export default function InterviewerSlot({loading,submitSlotData,handleChangeSlotData,decrementDate,incrementDate,slots,date,slotData,deleteSlot,setSlotData}){
    return(
         <>
          <form onSubmit={submitSlotData} className="w-full my-5 flex flex-col sm:flex-row gap-2">
             <input onChange={handleChangeSlotData}  className="border border-black" value={moment(slots.date).format("YYYY-MM-DD")} type="date" min={moment(new Date()).format("YYYY-MM-DD")} id="birthday" name="date" required={true}/>
             <input onChange={handleChangeSlotData} className="border border-black" value={slots.time} type="time" id="appt"  name="time" required={true}/>
             <button className="p-1 text-white bg-black flex items-center justify-center gap-2 hover:bg-opacity-80"><AiOutlineSchedule/>Add Schedule</button>
          </form>
              <List data={slotData} date={date} setData={setSlotData} name={"slot"}/>
              <div className="mt-2 flex gap-2 justify-center relative items-center">
            <button onClick={decrementDate} className={`text-black ${ date >= new Date() ?"opacity-100" :"opacity-50"}  absolute mr-32 border`}> <BsFillArrowLeftSquareFill/></button>
            <h1 className='text-sm font-semibold'>{moment(date).format("DD MMM YYYY")}</h1>
            <button onClick={incrementDate} className="text-black absolute ml-32"><BsFillArrowRightSquareFill/></button>
          </div>
         </>
      )
}