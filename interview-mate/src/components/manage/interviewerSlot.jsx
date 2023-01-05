import {BsCheckSquareFill} from 'react-icons/bs'
import axios from 'axios'
import useAuth from '../useAuth'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Pagination from '../Utils/pagination'
import TableHeader from '../Utils/table'
import InterviewerSlotTable from './interviewerSlotsTable'

export default function interviewPanelSchedules(){

 const {auth} = useAuth()
 const [activeslotData,setActiveSlotData] = useState()
 const [loading,setLoading] = useState(true)
 const [pageNumber,setPageNumber] = useState(0)
 const [totalBookedSlots,setTotalBookedSlots] = useState(0)

 const tableSection = [
	                      {id:1,tableName:"User",width:"96"},
	                      {id:2,tableName:"Email",width:"96"},
	                      {id:3,tableName:"Slots",width:"40"},
	                      {id:4,tableName:"Topic",width:"72"},
	                      {id:5,tableName:"Approve",width:"24"},
	                      {id:6,tableName:"Completed",width:"24"}
	                     ]

 const pageArray=new Array(totalBookedSlots).fill(0)

async function getActiveSlotData(){
        try{
          if(auth.token){
             await axios.get(`/api/slot/activeslots/${0}`,{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setActiveSlotData(res.data.activeSlots)
                 setTotalBookedSlots(res.data.totalBookedSlots)
                 setLoading(false)
             })
           }
        }catch(err){
           console.log(err)
           setLoading(false)

        }
     }

  async function approveSlot(e,id){
  	  console.log(e.target.checked)
        try{
          if(auth.token){
             await axios.put(`/api/slot/approve/${id}`,{approved:e.target.checked},{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 console.log(res)
             })
           }

           const approveSlot = activeslotData.map(slot=>{
	  		if(slot._id === id ){
	  			return {...slot,approved:!slot.approved}
	  		}else{
	  			return {...slot}
	  		}
  	        })

        setActiveSlotData(approveSlot)

        }catch(err){
           console.log(err)
        }
     }

  function setPage(num){
     setPageNumber(num)
  }





 useEffect(()=>{
    getActiveSlotData()
 },[auth.token])

    console.log(activeslotData)

    if(loading){
    	return <>loading...</>
    }
	return(
		 <div className="mt-5">
			  <div className="w-full grid overflow-x-auto gap-2">
				   {
				   activeslotData && activeslotData.length > 0 ?
				   <>
				    <TableHeader tableSection={tableSection}/>
				    <InterviewerSlotTable data={activeslotData} approveSlot={approveSlot}/>
				   </>
				    :
				    <>No Slots Yet</>
				   }
			  <div className="h-5"></div>
			  </div>

           <Pagination pageArray={pageArray} setPage={setPage} pageNumber={pageNumber}/>

			  <div className="px-2 mt-2">
			     <span className="text-md bg-blue-500 text-white px-2 font-bold">NOTES</span>
			     <h1 className="bg-gray-100 px-2 py-1 font-semibold text-sm">1. Please create Invitation link on google meet at <a className="text-blue-500" href="https://meet.google.com/">https://meet.google.com/</a> after approving request.  <span className="text-red-500">[schedule in calender (recommanded)]</span></h1> 
			     <h1 className="bg-gray-100 px-2 py-1 font-semibold text-sm">2. You will not be paid until the interviewee reviews the session.!!</h1> 
			     <h1 className="bg-gray-100 px-2 py-1 font-semibold text-sm">3. Hope you satisfy the interviewee and get good rating !! </h1> 
			     <h1 className="bg-gray-100 px-2 py-1 font-semibold text-sm">4. If any case, Interviewee forgot to review !! You are open to report at<span className="text-red-500"> report@interviewmates.com </span> with screen recording as proof.</h1> 
			  </div>

		</div>
		)
}	