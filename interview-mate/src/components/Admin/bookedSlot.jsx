import bookedSlots from './Hooks/useBookedSlots'

    


export default function comp(){

const {bookedData,setBookedData,loading} = bookedSlots()

   if(loading){
   	return <>loading..</>
   }

   const c = bookedData.reduce((acc,obj)=>{
   	  if(obj.approved === true){
         acc.approved += 1
   	  }else if(obj.reviewed === true){
   	  	 acc.reviewed += 1
   	  }
   	  return acc
   },{approved:0,reviewed:0})


	return(
		   <div className="w-full flex flex-col justify-center items-center overflow-x-auto">
		      	     <h1 className="text-md font-bold text-2xl">Boooked slots</h1>
		      	     <div className="flex gap-4 py-4">
		      	   	     <div className=""><span className="p-2  text-white bg-black">Booked : {bookedData.length}</span></div>
		      	   	     <div className=""><span className="p-2  text-white bg-black">Approved : {c.approved}</span></div>
		      	   	     <div className=""><span className="p-2  text-white bg-black">Reviewed : {c.reviewed}</span></div>
		      	     </div>
		      	     <div className="flex">
		      	         <div className="h-10 items-center w-72 border flex justify-center bg-black text-white">Interviewer</div>
		      	         <div className="h-10 items-center w-72 border flex justify-center bg-black text-white">Interviewee</div>
		      	         <div className="h-10 items-center w-24 px-3 border flex justify-center bg-black text-white">approved</div>
		      	         <div className="h-10 items-center w-24 px-3 border flex justify-center bg-black text-white">reviewed</div>
		      	     </div>
		      	     {
		      	       bookedData.map((b,i)=>{
		      	     		return (
					      	     <div className="flex" key={b._id}>
					      	         <div className="h-10 items-center w-72 border flex justify-center">{b.by.username}</div>
					      	         <div className="h-10 items-center w-72 border flex justify-center">{b.bookedBy.username}</div>
					      	         <div className="h-10 items-center w-24 px-3 border flex justify-center">{b.approved ? "0":"X"}</div>
					      	         <div className="h-10 items-center w-24 px-3 border flex justify-center">{b.completed ? "0":"X"}</div>
					      	     </div>
		      	                  )
		      	     	})
		      	     }
		      	   </div>
		)
} 