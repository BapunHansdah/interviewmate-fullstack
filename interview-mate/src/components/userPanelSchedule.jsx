import {BsCheckSquareFill} from 'react-icons/bs'

export default function interviewPanelSchedules(){
	return(
		 <div className="mt-5">
		   <div className="mt-2"><h1 className="text-2xl">Slots</h1></div>
		  <div className="grid overflow-x-scroll md:overflow-auto mt-5">
		    <div className="flex font-bold mx-auto">
		     <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">Interviewer</div>
		     <div className="w-72 h-10 border flex items-center justify-center bg-black text-white">Slots</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Approved</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Attended</div>
		    </div>
		     <div className="flex mx-auto">
			     <div className="w-96 h-10 border flex items-center justify-center text-sm">interviewre 1</div>
			     <div className="w-72 h-10 border flex items-center justify-center text-sm">8:30 pm , 13 Nov 2022</div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm bg-blue-500"><BsCheckSquareFill style={{color:'white'}}/></div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox"/></div>

		    </div>

		    <div className="flex mx-auto">
			     <div className="w-96 h-10 border flex items-center justify-center text-sm">Anique Maniac</div>
			     <div className="w-72 h-10 border flex items-center justify-center text-sm">8:30 pm , 13 Nov 2022</div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm bg-blue-500"><BsCheckSquareFill style={{color:'white'}}/></div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox"/></div>

		    </div>

		    <div className="flex mx-auto">
			     <div className="w-96 h-10 border flex items-center justify-center text-sm">Anique Maniac</div>
			     <div className="w-72 h-10 border flex items-center justify-center text-sm">8:30 pm , 13 Nov 2022</div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm bg-blue-500"><BsCheckSquareFill style={{color:'white'}}/></div>
			     <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox"/></div>
		    </div>
		    
		   
		  </div>
		  </div>
		)
}