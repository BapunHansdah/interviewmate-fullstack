import {Link} from 'react-router-dom'
import {BsCheckSquareFill} from 'react-icons/bs'
export default function SlotTable({data,approveSlot}){
	return(
		  
		      data && data.map((a,i)=>{
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
		    
		)
}