import {AiFillStar} from 'react-icons/ai'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdEditLocationAlt} from 'react-icons/md'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {RiImageEditFill} from 'react-icons/ri'
import Reviews from './sections/read/comments'
import Earnings from './sections/read/Earnings'
import InterviewPanelSchedules from './PanelSchedules'
import moment from 'moment'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {useCallback,useState,useEffect} from 'react'
import {DataJSON} from './Data'
import Slot from './sections/edit/Slot'
import Topic from './sections/edit/Topic'
import Tabs from './Utils/tabs'
import INFO from './sections/edit/Infos'
import UserPanelSchedule from './sections/edit/userPanelSchedule'
import getUserInfo from './Hooks/getUserInfo'
import useAuth from './useAuth'
import axios from 'axios'
import getSlots from './Hooks/getSlots'
import getTopics from './Hooks/getTopics'





export default function AdminPanel(){

const {info,setInfo,active,setActive,topicData,setTopicData} = getUserInfo()
const {slotData,setSlotData} = getSlots()
const {auth} = useAuth()
const [Data,setData] = useState(DataJSON)
const [slots,setSlots] =useState({time:"08:00",duration:30,price:0}) 
const [topics,setTopics] =useState("") 
const [date, updateDate] = useState(moment(new Date()));
const [expandTab , setExpandTab] = useState([false,false,false,false,false,false])
const [loading,setLoading] = useState(false)
const [searchText,setSearchText] = useState("")
const [topicRecommandation,setTopicRecommandation] = useState([{id:1,title:"frontend"},{id:2,title:"backend"},{id:3,title:"fullstack"},{id:4,title:"business"}])
 

// console.log(info)

//function for interviewr data------------------------------------- 
function handleChangeInfo(e){
  setInfo({...info,[e.target.name]:e.target.value})
}


const isValidUrl = urlString=> {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
        '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
      return !!urlPattern.test(urlString);
    }

async function submitInfo(e){
    e.preventDefault()
    if(!info.website.includes('http')){
        alert('please add http or https')
        return
    }
    if(!isValidUrl(info.website)){
        alert('please add a valid url')
        return
    }
    try{
        setLoading(true)
        console.log('hello')
        await axios.put(`/api/user/edit`,info,{
           'headers':{
                'Authorization':(auth.token ? auth.token : "")
           }
        }).then(res=>{
            console.log(res.data)
            setLoading(false)
        })
        setLoading(false)
    }catch(err){
        console.log(err)
        setLoading(false)
    }
}



// slot functions-------------------------------------------
function handleChangeSlotData(e){
  setSlots({...slots,id:new Date(),[e.target.name]:e.target.value})  
}


async function submitSlotData(e){
  e.preventDefault()
  const hour = slots.time.split(":")
  const ConvertedTime = hour[0] > 12 ? (`${hour[0]-12}:${hour[1]} PM`) : hour[0]=== "12" ? (`${12}:${hour[1]} PM `) : hour[0]==="00" ? (`${12}:${hour[1]} AM `) : (`${hour[0]-0}:${hour[1]} AM`) 
  try{
      await axios.post('api/slot/add',{time:ConvertedTime,date:moment(slots.date).format("DD MMM YYYY"),...slots},{
        'headers':{
            'Authorization':(auth.token ? auth.token : "")
        }
      }).then(res=>{
        console.log(res.data)
        setSlotData([...slotData,{...res.data}])
      })
  }catch(err){
     console.log(err)
  }
}

console.log(slotData)


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

  
  

// topic functions---------------------------------------------
  function handleChangeTopicData(e){
     setTopics(e.target.value)
  }

 async function submitTopicData(title){
    try{
      await axios.put('/api/user/addtopic',{title:title},{
        'headers':{
            'Authorization':(auth.token ? auth.token : "")
        }
      }).then(res=>{
            console.log(res)
            setTopicData([...topicData,{...res.data.topic[res.data.topic.length-1]}])
      })
    setTopics("")
  }catch(err){
     console.log(err)
  }

  // console.log(topicData)

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


   async function activeUser(e){
    e.preventDefault()
    try{
      await axios.put('api/user/active',{active:e.target.checked},{
        'headers':{
            'Authorization':(auth.token ? auth.token : "")
        }
      }).then(res=>{
         console.log(res.data)
         setActive(res.data.active)
      })
  }catch(err){
     console.log(err)
  }

  }



   if(!info.fullname){
     return <>Loading...</>
   }
   // return null




return(	
	<div className="p-5 border shadow max-w-[1000px] bg-white mx-auto mt-10 text-sm">


{/*---------------------------profile picture------------------------*/}
    <div className="flex gap-2 cursor-pointer justify-between">
       <div className="flex  gap-2">
        <img className="w-20" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/>
        <div className="flex items-center"><span className="text-lg text-center"><RiImageEditFill/></span></div>
       </div>
       <div className="font-semibold gap-2">
          <div className="p-2 border shadow">
            <input className="cursor-pointer" type="checkbox" name="active" id="active" checked={active} onChange={activeUser}/>
            <label className="cursor-pointer" htmlFor="active"> Active</label>
          </div>
       </div>
    </div>




{/*---------------------------- data ----------------------------------*/}



          <div className="border-b border-black py-5">
          <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Details"} 
               tabIndex={0}
          />
          <div className={`${expandTab[0]? "h-full":"h-0"} overflow-hidden transition-all`}>    
          <INFO 
                 Data={Data}
                 submitInfo={submitInfo}
                 handleChangeInfo={handleChangeInfo}
                 Info={info}
                 loading={loading}
          />
         </div>
         </div>




{/*---------------------------add topic-------------------------------------------*/}

          <div className="border-b border-black py-5">

          <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Add Topics"} 
               tabIndex={1}
          />
          
          <div className={`${expandTab[1]? "h-full":"h-0"} overflow-hidden transition-all`}>
            <Topic
                submitTopicData={submitTopicData}
                handleChangeTopicData={handleChangeTopicData}
                topicData={topicData}
                topics={topics}
                setTopicData={setTopicData}
                topicRecommandation={topicRecommandation}
                // deleteTopic={deleteTopic} 
            />
        </div>
        </div>



{/*-----------------------------------schedule--------------------------------------*/}
{
  info.role === "interviewer" ?
          <div className="border-b border-black py-5">
          <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Add Slots"} 
               tabIndex={2}
               loading={loading}
          />
          <div className={`${expandTab[2]? "h-full":"h-0"} overflow-hidden`}>
          <Slot 
               submitSlotData={submitSlotData} 
               handleChangeSlotData={handleChangeSlotData}
               decrementDate={decrementDate} 
               incrementDate={incrementDate} 
               slots={slots} 
               date={date} 
               slotData={slotData} 
               setSlotData={setSlotData} 
          />
          </div>
          </div>
          :
          <></>
}




{/*--------------------------------slot list ----------------------------------------------*/}

{info.role === "interviewer" ?
          <div className="border-b border-black py-5">        
             <Tabs 
               expand = {expand} 
               expandTab={expandTab} 
               title={"Slots"} 
               tabIndex={3}
             />
             <div className={`${expandTab[3]? "h-full":"h-0"} overflow-hidden`}>

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
               tabIndex={4}
             />
             <div className={`${expandTab[4]? "h-full":"h-0"} overflow-hidden`}>

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
