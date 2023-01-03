import {BsCheckSquareFill} from 'react-icons/bs'
import axios from 'axios'
import useAuth from './useAuth'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Pagination from './Utils/pagination'

export default function interviewPanelSchedules(){

 const {auth} = useAuth()
 const [activeslotData,setActiveSlotData] = useState()
 const [loading,setLoading] = useState(true)
 const [pageNumber,setPageNumber] = useState(0)
 const [totalBookedSlots,setTotalBookedSlots] = useState(0)

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
		   <div className=" overflow-x-auto md:overflow-x-auto mt-5  h-[500px]">
		   {
		   activeslotData && activeslotData.length > 0 ?
		   	<>
		    <div className="flex font-bold mx-auto">
		     <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">User</div>
		     <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">email</div>
		     <div className="w-40 h-10 border flex items-center justify-center bg-black text-white">Slots</div>
		     <div className="w-72 h-10 border flex items-center justify-center bg-black text-white">topic</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Approve</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Completed</div>
		    </div>
		    {
		      activeslotData && activeslotData.map((a,i)=>{
		    	return(
		    		     <div className="flex mx-auto" key={a._id}>
			               <div className="w-96 h-10 border flex items-center justify-center text-sm"><Link to={`/profile/${a.bookedBy.username}`}>{a.bookedBy.username}</Link></div>
		                   <div className="w-96 h-10 border flex items-center justify-center text-sm">{a.bookedBy.email}</div>
			               <div className="w-40 h-10 border flex items-center justify-center text-sm">{`${a.time} ,${a.date}`}</div>
		                   <div className="w-72 h-10 border flex items-center justify-center overflow-y-auto">
		                   {
		                   	  a.topic.map(t=>{
		                   	  	return <div key={t._id}>{t.title},</div>
		                   	  })
		                   }
		                   </div>
			              <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox" checked={a.approved} onChange={(e)=>approveSlot(e,a._id)}/></div>
			              <div className={`w-24 h-10 border flex items-center justify-center ${a.completed? "bg-green-500" : ""}`}><BsCheckSquareFill style={{color:'white'}}/></div>
		                  </div>
		    		)
		        })	
		    }
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