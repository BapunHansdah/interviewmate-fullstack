import {BsCheckSquareFill} from 'react-icons/bs'
import useAuth from '../../useAuth'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import Modal from 'react-modal'
import { Rating } from 'react-simple-star-rating'


export default function interviewPanelSchedules(){


 const {auth} = useAuth()
 const [approvedSlotData,setApprovedSlotData] = useState([])
 const [loading,setLoading] = useState(true)
 const [rating,setRating] = useState(0)
 const [open, setOpen] = useState(false)
 const [reviewInfo,setReviewInfo] = useState({id:"",by:"",review:"",rating:0})
 const [reviewText,setReviewText] = useState("")

const handleRating = (rate,index) => {
    setRating(rate)
  }

  // const onPointerMove = (value, index) => console.log(value)


async function getApprovedSlotData(){
        try{
          if(auth.token){
             await axios.get('/api/slot/approvedslots',{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
             	 console.log(res.data)
                 setApprovedSlotData(res.data)
                 setLoading(false)
             })
           }
        }catch(err){
           console.log(err)
           setLoading(false)

        }
     }

  async function submitReview(id,by){
  	  console.log(by)
        try{
             await axios.put(`/api/slot/complete/${id}`,{completed:true,rating:rating,by,review:reviewText},{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                  console.log(res)
             })
             const completeSlot = approvedSlotData.map(slot=>{
	  		       if(slot._id === id ){
	  			       return {...slot,completed:true,rating:rating,review:reviewText}
	  		       }else{
	  			       return {...slot}
	  		       }
  	             })
             setApprovedSlotData(completeSlot)
             setOpen(false)
        }catch(err){
           console.log(err)
        }
     }

  function openCancelModal(id){
        Swal.fire({
          title: 'Do you want to Cancel this Slot?',
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
   
  function reviewHandle(e){
  	setReviewText(e.target.value)
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

    const openModal = (id,by,review,rating) => {
        setReviewInfo({id,by,review,rating})
        setReviewText(review)
        setRating(rating)
        setOpen(true);
  }
  const closeModal = () =>{
    setOpen(false)
  }

  function chooseTopic(id,title){
     const isExist = topicSelected.some(topic=>{
       return id===topic.id
     })
     if(isExist){
         setTopicSelected(topicSelected.filter(topic=>topic.id !== id))
     }else{
        setTopicSelected([...topicSelected,{id,title}])
     }
  }

const bg = {
   overlay: {
     background: "rgba(0, 0, 0, 0.5)",
   }
 };

 useEffect(()=>{
    getApprovedSlotData()
 },[auth.token])
  console.log(rating)

    if(loading){
    	return <>loading...</>
    }
	return(
		 <div className="mt-5">
		  <div className="grid overflow-x-scroll md:overflow-auto mt-5">
		  {
		  	approvedSlotData.length > 0 ?  
		  	<>
		    <div className="flex font-bold mx-auto">
		     <div className="w-96 h-10 border flex items-center justify-center bg-black text-white">Interviewer</div>
		     <div className="w-40 h-10 border flex items-center justify-center bg-black text-white">Slots</div>
		     <div className="w-72 h-10 border flex items-center justify-center bg-black text-white">Topic</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Approved</div>
		     <div className="w-24 h-10 border flex items-center justify-center bg-black text-white">Attended</div>
		     <div className="w-20 flex items-center"><button className="bg-red-500 text-white p-2 w-full">Cancel</button></div>
		    </div>
		    {
		       	approvedSlotData.map((a,i)=>{
		       		return (
		       			   <div className="flex mx-auto" key={a._id}>
		       			      <div className={`w-96 h-10 border flex items-center justify-center text-sm ${a.booked ? "text-black":"text-gray-400"}`}><Link to={`/profile/${a.by.username}`}>{a.by.username}</Link></div>
			                  <div className={`w-40 h-10 border flex items-center justify-center text-sm ${a.booked ? "text-black":"text-gray-400"}`}>{`${a.time} ,${a.date}`}</div>
			                  <div className="w-72 h-10 border flex items-center justify-center overflow-y-auto">
		                   {
		                   	  a.topic.map(t=>{
		                   	  	return <div key={t._id}>{t.title},</div>
		                   	  })
		                   }
		                   </div>
			                  <div className={`w-24 h-10 border flex items-center justify-center text-sm ${a.approved ? a.booked ? "bg-blue-500":"bg-blue-200" :""}`}><BsCheckSquareFill style={{color:'white'}}/></div>
			                  <div className="w-24 h-10 border flex items-center justify-center text-sm"><input type="checkbox" onChange={(e)=>openModal(a._id,a.by._id,a.review,a.rating)} checked={a.completed} disabled={!a.approved || !a.booked}/></div>
		       			      {
		       			      	!a.approved ?<div className="flex items-center w-20"><button className={`${a.booked ? "bg-red-500":"bg-red-100"} text-white p-2 w-full`} onClick={()=>openCancelModal(a._id)} disabled={!a.booked}>X</button></div>:<div className="flex items-center w-20"></div>
		       			      }
		       			   </div>
		       			)
		       	})
		       }

		       <Modal isOpen={open} style={bg} className="max-w-md mx-auto border border-black bg-white h-fit mt-40 p-2">
                  <div className="p-2 flex flex-col gap-3"> 
                   <div>
                    <div>Rating</div>
                     <Rating
                       SVGclassName="inline-block"
                       onClick={handleRating}
                       size={25}
                       initialValue={reviewInfo.rating}
                     />
                     </div>
                     <div>
                        <label>Write Review</label>
                     	<textarea onChange={reviewHandle} value={reviewText} className="w-full p-2 h-40"/>
                     </div>
                     <div className="flex gap-2">
                        <button onClick={()=>submitReview(reviewInfo.id,reviewInfo.by)} disabled={rating === 0 ? true : false} className={`px-2 py-1 text-white ${rating === 0 ? "bg-gray-200":"bg-black"}`}>Sumbit</button>
                        <button className="px-2 py-1 text-white bg-black" onClick={()=>setOpen(false)}>Cancel</button>
                     </div>
                  </div>
                </Modal>
		      </>
		    :
		    <div>
		    	<>No Interviews Yet !</>
		    </div>
		  }  
		  <div className="h-5"></div>
		  </div>
		   <div className="px-2 mt-2">
		       <span className="text-md bg-blue-500 text-white px-2 font-bold">NOTES</span>
		       <h1 className="bg-gray-100 text-red-500 px-2 py-1 font-semibold text-sm">1. Once the interviewer approved your slot , you can not cancel slot !!</h1>
		       <h1 className="bg-gray-100 text-red-500 px-2 py-1 font-semibold text-sm">2. If you missed the interview your 70% of money will be refunded .</h1>
		       <h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">3. If you are satisfied with your interview check on "attendend" and Rate the interviewer based on their performance . </h1>
		       <h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">4. Make sure you screen record the entire interview process. So, if you are not satisfied or there is no interviewer, your entire payment will be refunded.</h1>
		       <h1 className="bg-gray-100 text-black px-2 py-1 font-semibold text-sm">5. You can review once per slot</h1>
		   </div>

		  </div>
		)
}