import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdEditLocationAlt} from 'react-icons/md'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {RiImageEditFill} from 'react-icons/ri'
import Reviews from './comments'
import Earnings from './Earnings'
import InterviewPanelSchedules from './PanelSchedules'
import moment from 'moment'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {useCallback,useState,useEffect} from 'react'
import {DataJSON} from './Data'
import Slot from './Slot'
import Topic from './Topic'
import Tabs from './tabs'
import INFO from './Infos'
import UserPanelSchedule from './userPanelSchedule'




export default function AdminPanel(){

const [Data,setData] = useState(DataJSON)
const [Info,setInfo] = useState(DataJSON.info)
const [slotData,setSlotData] = useState(DataJSON.slotdata)
const [slots,setSlots] =useState({time:"08:00"}) 
const [topicData,setTopicData] = useState(DataJSON.topicdata)
const [topics,setTopics] =useState("") 
const [date, updateDate] = useState(moment(new Date()));
const [expandTab , setExpandTab] = useState([true,false,false,false,false])


useEffect(()=>{
    

},[slotData,topicData])

//function for interviewr data------------------------------------- 
function handleChangeInfo(e){
  setInfo({...Info,[e.target.name]:e.target.value})
}


function submitInfo(e){
    e.preventDefault()
    setData({...Data,info:Info})   
}


// slot functions-------------------------------------------
function handleChangeSlotData(e){
  setSlots({...slots,id:new Date(),[e.target.name]:e.target.value})  
}


function submitSlotData(e){
  e.preventDefault()
  const hour = slots.time.split(":")
  const ConvertedTime = hour[0] > 12 ? (`${hour[0]-12}:${hour[1]} PM`) : hour[0]=== "12" ? (`${12}:${hour[1]} PM `) : hour[0]==="00" ? (`${12}:${hour[1]} AM `) : (`${hour[0]-0}:${hour[1]} AM`) 
  setSlotData([...slotData,{...slots,booked:false,time:ConvertedTime,date:moment(slots.date).format("DD MMM YYYY")}])
  setData({...Data,slotdata:slotData})
}


// function to change dates in slot---------------------------------
  const incrementDate = () => {
    updateDate(moment(date).add(1, "day"));
  };
  
  const decrementDate = () => {
     if(date <= new Date() ){
        return ;
     }
    updateDate(moment(date).subtract(1, "day"));
  };

  
  
  function deleteSlot(ind){
     setSlotData(slotData.filter((s,i)=> i !== ind))
     setData({...Data,slotdata:slotData})

  }
// topic functions---------------------------------------------
  function handleChangeTopicData(e){
     setTopics(e.target.value)
  }

  function submitTopicData(e){
    e.preventDefault()
     setTopicData([...topicData,topics])
     setData({...Data,topicdata:topicData})
  }



  function deleteTopic(ind){
     setTopicData(topicData.filter((s,i)=> i !== ind))
     setData({...Data,topicdata:topicData})
  }
  

// tab functions---------------------------------------------------
   function expand(tab){
     const ex = expandTab.map((e,i)=>{
         if(i === tab){
            return !e
         }else{
            return e
         }
     })
     setExpandTab(ex)
   }


return(	
		<div className="p-5 border shadow max-w-[1000px] bg-white mx-auto mt-10 text-sm">
{/*---------------------------profile picture------------------------*/}
    <div className="flex gap-2 cursor-pointer">
        <img className="w-20" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/>
        <div className="flex items-center"><span className="text-lg text-center"><RiImageEditFill/></span></div>
    </div>

{/*---------------------------- data ----------------------------------*/}
   <div className="border-b border-black py-5">

          <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Detail"} 
               tabIndex={0}
          />

        <div className={`${expandTab[0]? "h-full":"h-0"} overflow-hidden transition-all`}>    
            <INFO 
                 Data={Data}
                 submitInfo={submitInfo}
                 handleChangeInfo={handleChangeInfo}
                 Info={Info}
             />
         </div>
        </div>
{/*---------------------------add topic-------------------------------------------*/}
{
  Data.user_role ==="interviewer" ?
          <div className="border-b border-black py-5">

          <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Add Topic"} 
               tabIndex={1}
          />
          
          <div className={`${expandTab[1]? "h-full":"h-0"} overflow-hidden transition-all`}>
            <Topic
                submitTopicData={submitTopicData}
                handleChangeTopicData={handleChangeTopicData}
                topicData={topicData}
                deleteTopic={deleteTopic} 
            />
        </div>
        </div>
        :
          <></>
}
{/*-----------------------------------schedule--------------------------------------*/}
{
  Data.user_role ==="interviewer" ?
          <div className="border-b border-black py-5">
          <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Add Slots"} 
               tabIndex={2}
          />
          <div className={`${expandTab[2]? "h-full":"h-0"} overflow-hidden`}>
              <Slot submitSlotData={submitSlotData} 
                               handleChangeSlotData={handleChangeSlotData}
                               decrementDate={decrementDate} 
                               incrementDate={incrementDate} 
                               slots={slots} 
                               date={date} 
                               slotData={slotData} 
                               deleteSlot={deleteSlot} 
              />
          </div>
          </div>
          :
          <></>
}
{/*--------------------------------slot list ----------------------------------------------*/}

          <div className="border-b border-black py-5">        
             <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Slots"} 
               tabIndex={3}
             />
             <div className={`${expandTab[3]? "h-full":"h-0"} overflow-hidden`}>
             {
              Data.user_role ==="interviewer" ?
                <InterviewPanelSchedules/>:<UserPanelSchedule/>
             }
             </div>
          </div>
          
{/*------------------------------------ earnings------------------------------------*/}

{
  Data.user_role ==="interviewer" ?
          <div className="border-b border-black py-5">
             <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Earnings"} 
               tabIndex={4}
             />
             <div className={`${expandTab[4]? "h-full":"h-0"} overflow-hidden`}>
                <Earnings />
             </div>
         </div>
       :
          <></>
}
		</div>
	)
}
