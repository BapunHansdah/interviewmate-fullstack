import {BsCheckSquareFill} from 'react-icons/bs'
import axios from 'axios'
import useAuth from './useAuth'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

export default function interviewPanelSchedules(){

 const {auth} = useAuth()
 const [activeslotData,setActiveSlotData] = useState()
 const [loading,setLoading] = useState(true)

async function getActiveSlotData(){
        try{
          if(auth.token){
             await axios.get('/api/slot/activeslots',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setActiveSlotData(res.data)
                 setLoading(false)
             })
           }
        }catch(err){
           console.log(err)
           setLoading(false)

        }
     }

  async function approveSlot(e,id){
  	  console.log(e.target.checked)
        try{
          if(auth.token){
             await axios.put(`/api/slot/approve/${id}`,{approved:e.target.checked},{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 console.log(res)
             })
           }

           const approveSlot = activeslotData.map(slot=>{
	  		if(slot._id === id ){
	  			return {...slot,approved:!slot.approved}
	  		}else{
	  			return {...slot}
	  		}
  	        })

        setActiveSlotData(approveSlot)

        }catch(err){
           console.log(err)
        }
     }





 useEffect(()=>{
    getActiveSlotData()
 },[auth.token])

    // console.log(activeslotData)

    if(loading){
    	return <>loading...</>
    }
	return(
		 <div className="mt-5">
		   <div className="grid overflow-x-scroll md:overflow-auto mt-5">
		    <div className="flex font-bold mx-auto">
		     <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">User</div>
		     <div className="w-72 h-10 border flex items-center justify-center bg-black text-white">Slots</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Approve</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Completed</div>
		    </div>
		    {
		       activeslotData.map((a,i)=>{
		    	return(
		    		     <div className="flex mx-auto" key={a._id}>
			                <div className="w-96 h-10 border flex items-center justify-center text-sm"><Link to={`/profile/${a.bookedBy.username}`}>{a.bookedBy.username}</Link></div>
			              <div className="w-72 h-10 border flex items-center justify-center text-sm">{`${a.time} ,${a.date}`}</div>
			              <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox" checked={a.approved} onChange={(e)=>approveSlot(e,a._id)}/></div>
			              <div className={`w-24 h-10 border flex items-center justify-center ${a.completed? "bg-green-500" : ""}`}><BsCheckSquareFill style={{color:'white'}}/></div>
		                  </div>
		    		)
		        })	
		    }
		    
		  </div>
		  </div>
		)
}