import Earnings from './earnings'
import BookedSlots from './bookedSlot'
import Analytics from './analytics'
import Userlists from './userlist'
import {useState,useEffect} from 'react'
import useAuth from '../useAuth'
import axios from 'axios'
import useAdmin from './useAdmin'
import {Navigate} from 'react-router-dom'

export default function Main(){

	const [tab,setTab] = useState(1)
    const {isAdmin,loading} = useAdmin()
    const [sideBar,setSideBar] = useState(false)
     
    console.log(isAdmin)
    if(loading){
    	return <>loading</>
    }




    if(isAdmin === false){
       return (
       	   <>
             <Navigate to='/error'/>
           </>
       	)
    }

   function openSideBar(){
   	  setSideBar(!sideBar)
   }

   
     
    function currentTab(id){
    	setTab(id)
    }
    const tabArray = [
                      // {id:1,tabName:"Dashboard"},
                      {id:2,tabName:"Userlist"},
                      {id:3,tabName:"BookedSlot"},
                      {id:4,tabName:"Earnings"},
                      ]

	return(
		 <div className="overflow-hidden h-screen">

		  <div>
		  	<div className="w-full text-white bg-blue-500 flex justify-between">
		  		<div className="flex gap-2 font-bold cursor-pointer" onClick={openSideBar}>
		  		   <span className="p-4">===</span>
		  		   <span className="p-4">Dashboard</span>
		  		</div>
		  		<div className="flex gap-10">
		  			<span className="p-4">message</span>
		  			<span className="p-4">notification</span>
		  			<span className="p-4">profile</span>
		  		</div>

		  	</div>
		  </div>

		  <div className="flex w-full relative">
			  <div className={`absolute ${sideBar ? "left-0":"-left-[1000px]"} transition-all bg-white shadow w-full sm:w-6/12 md:w-3/12 shadow-2xl z-10 h-screen	 overflow-y-scroll`}>
			  
			  <div className="flex flex-col">
			        { 
			           tabArray.map(t=>{
			           	 return (
	              		          <div key={t.id} className={`p-3 bg-white border cursor-pointer ${t.id  === tab ? "bg-blue-500 text-white":""}  hover:opacity-70 `} onClick={()=>currentTab(t.id)}>{t.tabName}</div>
			           	 	)
			           })
			        }
			        {/*<div className="h-10"></div>*/}
			  </div>

			  </div>


			  <div className="w-full">
			      <div className="">

			         {
			         	tab === 2 ? <Userlists/> :
			         	tab === 3 ? <BookedSlots/> :
			         	 <Earnings/>
			         }
			      	   
			      </div>
			  </div>

			  </div>

		  </div>
		)
}