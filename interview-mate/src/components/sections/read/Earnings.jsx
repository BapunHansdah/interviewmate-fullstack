import {AiFillMoneyCollect} from 'react-icons/ai'
export default function interviewerEarnings(){
	return(
		   <div className="mt-5">
		   <div className="flex mx-auto items-center mt-5">
		         <div className="text-md font-semibold">Total 	-</div>
		         <div className="text-md">120$</div>
		    </div>
		  <div className="grid overflow-x-scroll md:overflow-auto mt-5">
		    <div className="flex font-bold mx-auto">
		         <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">Users</div>
		         <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">Date</div>
		         <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Earnings</div>
		    </div>
		     <div className="flex  mx-auto">
		         <div className="w-96 h-10 border flex items-center justify-center text-sm">Anique Maniac</div>
		         <div className="w-96 h-10 border flex items-center justify-center text-sm">11:40 pm 13th oct 22</div>
		         <div className="w-24 h-10 border flex items-center justify-center text-sm">30 $</div>
		    </div>
		     <div className="flex mx-auto">
		         <div className="w-96 h-10 border flex items-center justify-center text-sm">Animex</div>
		         <div className="w-96 h-10 border flex items-center justify-center text-sm">12:40 pm 22th oct 22</div>
		         <div className="w-24 h-10 border flex items-center justify-center text-sm">30 $</div>
		    </div>
		  </div>
		  </div>
		)
}