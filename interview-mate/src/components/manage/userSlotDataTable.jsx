import {Link} from 'react-router-dom'
import {MdOutlineRateReview} from 'react-icons/md'
import {BsCheckSquareFill} from 'react-icons/bs'

export default function SlotTable({data,openModal,openCancelModal}){
	return(
		  
		      data && data.map((a,i)=>{
		       		return (
		       			   <div className="flex" key={a._id}>
		       			      <div className={`w-96 h-10 border flex items-center justify-center text-sm ${a.booked ? "text-blue-500":"text-gray-400"}`}><Link to={`/profile/${a.by.username}`}>{a.by.username}</Link></div>
			                  <div className={`w-40 h-10 border flex items-center justify-center text-sm ${a.booked ? "text-black":"text-gray-400"}`}>{`${a.time} ,${a.date}`}</div>
			                  <div className={`w-72 h-10 border flex items-center justify-center overflow-y-auto ${a.booked ? "text-black":"text-gray-400"}`}>
        		                   {
        		                   	  a.topic.map(t=>{
        		                   	  	return <div key={t._id}>{t.title},</div>
        		                   	  })
        		                   }
        		              </div>
			                  <div className={`w-24 h-10 border flex items-center justify-center text-sm ${a.approved ? a.booked ? "bg-blue-500":"bg-blue-200" :""}`}><BsCheckSquareFill style={{color:'white'}}/></div>
			                  <div className="w-24 h-10 border flex items-center justify-center text-sm"><button disabled={!a.approved || !a.booked} onClick={()=>openModal(a._id,a.by._id,a.review,a.rating)} className={`${!a.completed ? !a.approved || !a.booked ? "bg-orange-100" :"bg-orange-300":"bg-orange-500"} h-10 text-white w-full flex items-center gap-2 justify-center`}><MdOutlineRateReview/>{!a.completed ? "Review" : "Reviewed"}</button></div>
		       			      {
		       			      	!a.approved ?<div className="w-24 h-10 border flex items-center justify-center text-sm cursor-pointer text-white"><button className={`${a.booked ? "bg-red-500":"bg-red-100"} w-full h-10`} onClick={()=>openCancelModal(a._id)} disabled={!a.booked}>X</button></div>:<div className="w-24 h-10 border flex items-center text-white cursor-pointer justify-center text-sm bg-red-200">X</div>
		       			      }
		       			   </div>
		       			)
		       	})
		    
		)
}