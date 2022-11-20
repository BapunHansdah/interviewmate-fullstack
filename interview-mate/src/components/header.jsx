import {Link} from 'react-router-dom'


export default function Header(){
	return (
		   <div className="max-w-[1440px] flex justify-between items-center mx-auto px-3 py-5 shadow">
		     <div className="">
		       <div className="">
		         <div className="font-bold bg-orange-500 px-2 rounded border-b border-black text-white"><Link to="/">Interview Mate</Link></div>
		       </div>
		     </div>
		     <div className="hidden md:block">
		       <div className="flex gap-10">
		        <div className="text-sm font-semibold hover:text-gray-500 cursor-pointer">Home</div>
		     	<div className="text-sm font-semibold hover:text-gray-500 cursor-pointer">Login</div>
		     	<div className="text-sm font-semibold hover:text-gray-500 cursor-pointer">Register</div>
		       </div>
		     </div>
		   </div>
		)
}