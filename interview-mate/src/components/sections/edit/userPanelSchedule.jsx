import {BsCheckSquareFill} from 'react-icons/bs'
import useAuth from '../../useAuth'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'


export default function interviewPanelSchedules(){


 const {auth} = useAuth()
 const [approvedSlotData,setApprovedSlotData] = useState([])
 const [loading,setLoading] = useState(true)

async function getApprovedSlotData(){
        try{
          if(auth.token){
             await axios.get('/api/slot/approvedslots',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setApprovedSlotData(res.data)
                 setLoading(false)
             })
           }
        }catch(err){
           console.log(err)
           setLoading(false)

        }
     }

  async function completeSlot(e,id){
  	  console.log(e.target.checked)
        try{
             await axios.put(`/api/slot/complete/${id}`,{completed:e.target.checked},{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                  console.log(res)
             })
             const completeSlot = approvedSlotData.map(slot=>{
	  		       if(slot._id === id ){
	  			       return {...slot,completed:!slot.completed}
	  		       }else{
	  			       return {...slot}
	  		       }
  	             })
             setApprovedSlotData(completeSlot)
        }catch(err){
           console.log(err)
        }
     }

  function openModal(id){
        Swal.fire({
          title: 'Do you want to Cancel slots?',
          showCancelButton: true,
          confirmButtonText: 'Yes',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            cancelSlot(id)
            Swal.fire("Slot Cancelled !!")
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
  }


  async function cancelSlot(id){
       try{

             await axios.put(`/api/slot/schedule/${id}`,{booked:false},{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 console.log(res)
             })

             const selectSlot = approvedSlotData.map(slot=>{
             if(slot._id === id ){
               return {...slot,booked:false}
             }else{
               return {...slot}
             }
             })
             setApprovedSlotData(selectSlot)           
        }catch(err){
             console.log(err)
        }
  }

 useEffect(()=>{
    getApprovedSlotData()
 },[auth.token])

    console.log(approvedSlotData)

    if(loading){
    	return <>loading...</>
    }
	return(
		 <div className="mt-5">
		  <div className="grid overflow-x-scroll md:overflow-auto mt-5">
		    <div className="flex font-bold mx-auto">
		     <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">Interviewer</div>
		     <div className="w-72 h-10 border flex items-center justify-center bg-black text-white">Slots</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Approved</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Attended</div>
		     <div className="w-20 flex items-center"><button className="bg-red-500 text-white p-2 w-full">Cancel</button></div>
		    </div>
		     
		       {
		       	approvedSlotData.map((a,i)=>{
		       		return (
		       			   <div className="flex mx-auto" key={a._id}>
		       			      <div className={`w-96 h-10 border flex items-center justify-center text-sm ${a.booked ? "text-black":"text-gray-400"}`}><Link to={`/profile/${a.by.username}`}>{a.by.username}</Link></div>
			                  <div className={`w-72 h-10 border flex items-center justify-center text-sm ${a.booked ? "text-black":"text-gray-400"}`}>{`${a.time} ,${a.date}`}</div>
			                  <div className={`w-24 h-10 border flex items-center justify-center text-sm ${a.approved ? a.booked ? "bg-blue-500":"bg-blue-200" :""}`}><BsCheckSquareFill style={{color:'white'}}/></div>
			                  <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox" onChange={(e)=>completeSlot(e,a._id)} checked={a.completed} disabled={!a.approved || !a.booked}/></div>
		       			      <div className="flex items-center w-20"><button className={`${a.booked ? "bg-red-500":"bg-red-100"} text-white p-2 w-full`} onClick={()=>openModal(a._id)} disabled={!a.booked}>X</button></div>
		       			   </div>
		       			)
		       	})
		       }  
		  </div>
		  </div>
		)
}