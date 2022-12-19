import {Link} from 'react-router-dom'


export default function Header(){
	return (
		  
		   <div className=" bg-white flex justify-between items-center mx-auto px-3 py-5 shadow">
		     <div className="">
		       <div className="">
		         <div className="font-bold bg-orange-500 px-2 rounded border-b border-black text-white"><Link to="/">Interview Mate</Link></div>
		       </div>
		     </div>
		     <div className="hidden md:block">
		       <div className="flex gap-8">
		        <div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to="/">Home</Link></div>
		     	<div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to="/panel">Editor</Link></div>
		     	<div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to="/profile">Profile</Link></div>
		     	<div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to="/login">Sign in</Link></div>
		     	<div className="text-sm font-semibold hover:text-white hover:bg-opacity-80 cursor-pointer bg-orange-500 py-2 px-1 rounded"><Link to="/signup">Sign up</Link></div>
		       </div>
		     </div>
		   </div>
		)
}