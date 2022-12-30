import userList from './Hooks/useUserList'
import {useState,useEffect} from 'react'

export default function comp(){
    const {userListData,setUserListData,loading} = userList()
    // const [count,setCount] = useState({interviewer:0,user:0})

   if(loading){
   	return <>loading..</>
   }
 
   const c = userListData.reduce((acc,obj)=>{
   	  if(obj.role === 'user'){
   	  	// setCount(count.user++)
         acc.user += 1
   	  }else if(obj.role === 'interviewer'){
   	  	 acc.interviewer += 1
   	  }else if (obj.role === 'admin' ){
   	  	acc.admin += 1
   	  }
   	  return acc
   },{user:0,interviewer:0,admin:0})

   console.log(c)






    
	return(

		 <div className="w-full flex flex-col justify-center items-center overflow-x-auto">
		      	     <h1 className="text-md font-bold text-2xl">Users</h1>

		      	     <div className="flex gap-4 py-4">
		      	   	     <div className=""><span className="p-2  text-white bg-black">Total users : {userListData.length}</span></div>
		      	   	     <div className=""><span className="p-2  text-white bg-black">Admin : {c.admin}</span></div>
		      	   	     <div className=""><span className="p-2  text-white bg-black">Interviewers : {c.interviewer}</span></div>
		      	   	     <div className=""><span className="p-2  text-white bg-black">Interviewee : {c.user}</span></div>
		      	     </div>
		      	     <div className="flex">
		      	         <div className="h-10 items-center w-72 border flex justify-center bg-black text-white">user</div>
		      	         <div className="h-10 items-center w-24 border flex justify-center bg-black text-white">role</div>
		      	         <div className="h-10 items-center w-72 border flex justify-center bg-black text-white">email</div>
		      	         <div className="h-10 items-center w-24 border flex justify-center bg-black text-white">active</div>
		      	         <div className="h-10 items-center w-24 border flex justify-center bg-black text-white">Edit</div>
		      	         <div className="h-10 items-center w-24 border flex justify-center bg-black text-white">terminate</div>
		      	     </div>
		      	     {
		      	     	userListData.map((u,i)=>{
		      	     		return (

		      	     			   <div className="flex" key={u._id}>
		      	         <div className="h-10 items-center w-72 border flex justify-center">{u.fullname}</div>
		      	         <div className="h-10 items-center w-24 border flex justify-center">{u.role}</div>
		      	         <div className="h-10 items-center w-72 border flex justify-center">{u.user.email}</div>
		      	         <div className="h-10 items-center w-24 border flex justify-center">{u.active ? "active":"not active"}</div>
		      	         <div className="h-10 w-24 flex justify-center items-center"><button className="h-7  w-20  rounded items-center flex justify-center bg-blue-500 text-white">edit</button></div>
		      	         <div className="h-10 w-24 flex justify-center items-center"><button className="h-7  w-20  rounded items-center flex justify-center bg-red-500 text-white">terminate</button></div>
		      	     </div>

		      	     			)
		      	     	})
		      	     }
		      	    
		      	   </div>

		)
} 