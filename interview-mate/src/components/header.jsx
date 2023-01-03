import {Link,useNavigate} from 'react-router-dom'
import getUserInfo from './Hooks/getUserInfo'
import {useState} from 'react'
import axios from 'axios'
export default function Header(){
      
      const {info,loading,auth} = getUserInfo()
      const [isDropDownActive,setIsDropDownActive] = useState(false)
      const navigate = useNavigate()
     function openDropDown(){
     	  setIsDropDownActive(!isDropDownActive)
     }

     async function logOut(){
     	 try{
     	    await axios.get('/api/auth/signout').then(res=>console.log(res)) 
     	    navigate('/login')  
     	    openDropDown()  	
     	    refreshPage()
     	 }catch(err){
     	   	console.log(err)
     	 }
     }

     function refreshPage() {
     window.location.reload(false);
     return ;
  }

 
    	return (		  
		   <div className=" bg-white flex justify-between items-center mx-auto px-3 py-5 shadow">
		     <div className="flex items-center gap-4">
		       <div className="">
		         <div className="font-bold bg-orange-500 px-2 rounded border-b border-black text-white"><Link to="/">Interview Mates</Link></div>
		       </div>
		     </div>
		     <div className="">
		       <div className="flex gap-8">
		     	 
		     	{
		     	 !loading && auth.isLoggedIn ? 
		     	 <>
		     	  <div><img className="w-8 h-8 rounded-full object-contain cursor-pointer" onClick={openDropDown} src={info.avatar}/></div>
                    <div className={`${isDropDownActive ? "block": "hidden"} shadow absolute bg-white top-10 right-10 w-44 rounded py-2`}>
		     	     <Link  to={`/profile/${info.user.username}`}><div className="text-sm font-semibold hover:bg-gray-100 cursor-pointer p-2" onClick={openDropDown}>Profile</div></Link> 
		     	     <Link  to="/manage"><div className="text-sm font-semibold hover:bg-gray-100 cursor-pointer p-2" onClick={openDropDown}>Manage Slots</div></Link> 		     					     			
		     	     <Link  to="/panel"><div className="text-sm font-semibold hover:bg-gray-100 cursor-pointer p-2" onClick={openDropDown}>Edit profile</div></Link>
		     	     <div className="text-sm font-semibold cursor-pointer p-2 bg-red-500 rounded hover:bg-red-400 text-white text-center" onClick={logOut}>Log Out</div>
		     	  </div>
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