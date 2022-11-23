import {BsCheckSquareFill} from 'react-icons/bs'

export default function interviewPanelSchedules(){
	return(
		 <div className="mt-5">
		   <div className="grid overflow-x-scroll md:overflow-auto mt-5">
		    <div className="flex font-bold mx-auto">
		     <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">User</div>
		     <div className="w-72 h-10 border flex items-center justify-center bg-black text-white">Slots</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Approve</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Completed</div>
		    </div>
		     <div className="flex mx-auto">
			     <div className="w-96 h-10 border flex items-center justify-center text-sm">Anique Maniac</div>
			     <div className="w-72 h-10 border flex items-center justify-center text-sm">8:30pm</div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox"/></div>
			     <div className="w-24 h-10 border flex items-center justify-center bg-green-500"><BsCheckSquareFill style={{color:'white'}}/></div>
		    </div>
		    <div className="flex mx-auto">
			     <div className="w-96 h-10 border flex items-center justify-center text-sm">Anique Maniac</div>
			     <div className="w-72 h-10 border flex items-center justify-center text-sm">8:30pm</div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox"/></div>
			     <div className="w-24 h-10 border flex items-center justify-center"><BsCheckSquareFill style={{color:''}}/></div>
		    </div>
		    <div className="flex mx-auto">
			     <div className="w-96 h-10 border flex items-center justify-center text-sm">Anique Maniac</div>
			     <div className="w-72 h-10 border flex items-center justify-center text-sm">8:30pm</div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox"/></div>
			     <div className="w-24 h-10 border flex items-center justify-center"><BsCheckSquareFill style={{color:''}}/></div>
		    </div>
		   
		  </div>
		  </div>
		)
}