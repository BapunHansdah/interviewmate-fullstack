import Earnings from './sections/read/Earnings'
import InterviewPanelSchedules from './manage/interviewerSlot'
import UserPanelSchedule from './manage/userSlot'
import getUserInfo from './Hooks/getUserInfo'
import {useState} from 'react'
import Tabs from './Utils/tabs'

export default function manageSlots(){

const {info,setInfo,active,setActive,topicData,setTopicData} = getUserInfo()

const [expandTab , setExpandTab] = useState([true,true,true])


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
{/*--------------------------------slot list ----------------------------------------------*/}

{info.role === "interviewer" ?
          <div className="border-b border-black py-5">        
             <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Slots"} 
               tabIndex={0}
             />
             <div className={`${expandTab[0]? "h-full":"h-0"} overflow-hidden`}>

               <InterviewPanelSchedules/>
        
             </div>
          </div>:
          <></>
      }


          <div className="border-b border-black py-5">        
             <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Interviews"} 
               tabIndex={1}
             />
             <div className={`${expandTab[1]? "h-full":"h-0"} overflow-hidden`}>

              <UserPanelSchedule/>
        
             </div>
          </div>
          


          
{/*------------------------------------ earnings------------------------------------*/}

{
  info.role ==="interviewer" ?
          <div className="border-b border-black py-5">
             <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Earnings"} 
               tabIndex={2}
             />
             <div className={`${expandTab[2]? "h-full":"h-0"} overflow-hidden`}>
                <Earnings />
             </div>
         </div>
       :
          <></>
}
		  </div>
		)
}