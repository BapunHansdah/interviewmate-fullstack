import axios from 'axios'
import {BsCheckSquareFill} from 'react-icons/bs'
import useAuth from './useAuth'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Pagination from './Utils/pagination'

export default function testing(){


 const {auth} = useAuth()
 const [activeslotData,setActiveSlotData] = useState()
 const [loading,setLoading] = useState(true)
 const [pageNumber,setPageNumber] = useState(0)
 const [totalBookedSlots,setTotalBookedSlots] = useState(0)

 const pageArray=new Array(totalBookedSlots).fill(0)

async function getActiveSlotData(){
        try{
          if(auth.token){
             await axios.get(`/api/slot/activeslots/${0}`,{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 setActiveSlotData(res.data.activeSlots)
                 setTotalBookedSlots(res.data.totalBookedSlots)
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

  function setPage(num){
     setPageNumber(num)
  }


 useEffect(()=>{
    getActiveSlotData()
 },[auth.token])




	const tableSection = [
	                      {id:1,tableName:"User",width:"96"},
	                      {id:2,tableName:"Email",width:"96"},
	                      {id:3,tableName:"Slots",width:"40"},
	                      {id:4,tableName:"Topic",width:"72"},
	                      {id:5,tableName:"Approve",width:"24"},
	                      {id:6,tableName:"Completed",width:"24"}
	                     ]
	const Data = [
	              [
                  {id:1,tableData:"bapun",width:"96"},
                  {id:2,tableData:"bapu@gmail",width:"96"},
                  {id:3,tableData:"8:00",width:"40"},
                  {id:4,tableData:"fronend",width:"72"},
                  {id:5,tableData:"Approve",width:"24"},
                  {id:6,tableData:"Completed",width:"24"}
                  ],
                  [
                  {id:1,tableData:"barun",width:"96"},
                  {id:2,tableData:"baru@gmail",width:"96"},
                  {id:3,tableData:"8:00",width:"40"},
                  {id:4,tableData:"fronend",width:"72"},
                  {id:5,tableData:"Approve",width:"24"},
                  {id:6,tableData:"Completed",width:"24"}
                  ],
                  [
                  {id:1,tableData:"anique",width:"96"},
                  {id:2,tableData:"anique@gmail",width:"96"},
                  {id:3,tableData:"8:00",width:"40"},
                  {id:4,tableData:"fronend",width:"72"},
                  {id:5,tableData:"Approve",width:"24"},
                  {id:6,tableData:"Completed",width:"24"}
                  ],
	             ]

	if(loading){
    	return <>loading...</>
    }
	return(
		  <div className="w-full grid overflow-x-auto gap-2">
		    <div className="flex font-bold mx-auto">
		    {	
		    	tableSection.map(t=>{
		    		return (
		                   <div key={t.id} className={`w-${t.width} h-10 border flex items-center justify-center bg-black text-white`}>{t.tableName}</div>
		    			)
		    	})
		    }
		    </div>
		    {
		      activeslotData && activeslotData.map((a,i)=>{
		    	return(
		    		     <div className="flex mx-auto" key={a._id}>
			               <div className="w-96 h-10 border flex items-center justify-center text-sm"><Link to={`/profile/${a.bookedBy.username}`}>{a.bookedBy.username}</Link></div>
		                   <div className="w-96 h-10 border flex items-center justify-center text-sm">{a.bookedBy.email}</div>
			               <div className="w-40 h-10 border flex items-center justify-center text-sm">{`${a.time} ,${a.date}`}</div>
		                   <div className="w-72 h-10 border flex items-center justify-center overflow-y-auto">
		                   {
		                   	  a.topic.map(t=>{
		                   	  	return <div key={t._id}>{t.title},</div>
		                   	  })
		                   }
		                   </div>
			              <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox" checked={a.approved} onChange={(e)=>approveSlot(e,a._id)}/></div>
			              <div className={`w-24 h-10 border flex items-center justify-center ${a.completed? "bg-green-500" : ""}`}><BsCheckSquareFill style={{color:'white'}}/></div>
		             </div>
		    		)
		        })	
		    }
		  </div>
		)
}