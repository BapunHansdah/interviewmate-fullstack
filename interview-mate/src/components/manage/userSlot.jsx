import {BsCheckSquareFill} from 'react-icons/bs'
import {MdOutlineRateReview} from 'react-icons/md'
import useAuth from '../useAuth'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import Modal from 'react-modal'
import { Rating } from 'react-simple-star-rating'
import Pagination from '../Utils/pagination'
import Table from '../Utils/table'
import UserSlotData from './userSlotDataTable' 


export default function interviewPanelSchedules(){


 const {auth} = useAuth()
 const [approvedSlotData,setApprovedSlotData] = useState([])
 const [loading,setLoading] = useState(true)
 const [rating,setRating] = useState(0)
 const [open, setOpen] = useState(false)
 const [reviewInfo,setReviewInfo] = useState({id:"",by:"",review:"",rating:0})
 const [reviewText,setReviewText] = useState("")
 const [pageNumber,setPageNumber] = useState(0)
 const [totalBookedSlots,setTotalBookedSlots] = useState(0)

  const tableSection = [
                          {id:1,tableName:"interviewer",width:"96"},
                          {id:2,tableName:"slots",width:"40"},
                          {id:3,tableName:"Topic",width:"72"},
                          {id:4,tableName:"Approved",width:"24"},
                          {id:5,tableName:"attendend",width:"24"},
                          {id:6,tableName:"cancel",width:"24"},
                         ]

 const pageArray=new Array(totalBookedSlots).fill(0)



 

const handleRating = (rate,index) => {
    setRating(rate)
  }



async function getApprovedSlotData(){
        try{
          if(auth.token){
             await axios.get(`/api/slot/bookedslots/${pageNumber}`,{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
             	 console.log(res.data)
                 setApprovedSlotData(res.data.bookedSlots)
                 setTotalBookedSlots(res.data.totalBookedSlots)
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

  function setPage(num){
     setPageNumber(num)
  }

const bg = {
   overlay: {
     background: "rgba(0, 0, 0, 0.5)",
   }
 };

 useEffect(()=>{
    getApprovedSlotData()
 },[auth.token,pageNumber])




    if(loading){
    	return <>loading...</>
    }


   
	return(
		 <div className="mt-5">
		  <div className="w-full grid overflow-x-auto gap-2">
		  {
		  approvedSlotData	&& approvedSlotData.length > 0 ?  
		  	<>
		    <Table tableSection={tableSection}/>
		    <UserSlotData data={approvedSlotData} openModal={openModal} openCancelModal={openCancelModal}/>		  
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
          <div>
          <Pagination pageArray={pageArray} setPage={setPage} pageNumber={pageNumber}/>
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