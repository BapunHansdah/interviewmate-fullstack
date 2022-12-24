import {Link} from 'react-router-dom'
import getUserInfo from './Hooks/getUserInfo'
export default function Header(){
      
      const {info,loading,auth} = getUserInfo()

      // console.log(info)

 
    	return (		  
		   <div className=" bg-white flex justify-between items-center mx-auto px-3 py-5 shadow">
		     <div className="">
		       <div className="">
		         <div className="font-bold bg-orange-500 px-2 rounded border-b border-black text-white"><Link to="/">Interview Mates</Link></div>
		       </div>
		     </div>
		     <div className="hidden md:block">
		       <div className="flex gap-8">
		        <div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to="/">Home</Link></div>
		     	{
		     	 !loading && auth.isLoggedIn ? 
		     	  <>
		     	     <div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to={`/profile/${info.user.username}`}>hello, {info.user.username}</Link></div> 		     			
		     	     <div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to="/panel">Editor</Link></div>
		     	  </>
		     	:
		     	  <>
		     	     <div className="text-sm font-semibold hover:text-gray-500 cursor-pointer py-2 px-1"><Link to="/login">Sign in</Link></div>
		     	     <div className="text-sm font-semibold hover:text-white hover:bg-opacity-80 cursor-pointer bg-orange-500 py-2 px-1 rounded"><Link to="/signup">Sign up</Link></div>
		          </>
		     }
		       </div>
		     </div>
		   </div>
		)
}