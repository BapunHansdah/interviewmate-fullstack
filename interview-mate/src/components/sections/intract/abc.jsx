import moment from 'moment'
import {useState} from 'react'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import useAuth from '../../useAuth'
import axios from 'axios'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Modal from 'react-modal'
// import { Dialog } from "@reach/dialog";
// import swal from '@sweetalert/with-react'

Modal.setAppElement('#root')
export default function slot({info,topic,bio}){

const [date, updateDate] = useState(moment(new Date()));

const [availSlot,setAvailSlot] = useState(info)
const [open, setOpen] = useState(false)
const [paymentInfo,setPaymentInfo] = useState({time:"",by:"",id:"",price:"",duration:"",topic:[]})
const [topicSelected,setTopicSelected] = useState([])






const {auth} =useAuth()

//changing the date in slot
  const incrementDate = () => {
    updateDate(moment(date).add(1, "day"));
  };
  const decrementDate = () => {
     if(date <= new Date() ){
        return ;
     }
     updateDate(moment(date).subtract(1, "day"));
  };

  const openModal = (time,by,id,price,duration,topic) => {
    setPaymentInfo({time,by,id,price,duration,topic})
    setOpen(true);
  }

  const closeModal = () =>{
    // setPaymentInfo({time,by,id,price,duration,topic})
    setOpen(false)
  }
  // const close = () => {
  //   setShowDialog(false);
  // }
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



  
  async function scheduleSlot(id,by){
       try{

             await axios.put(`/api/slot/schedule/${id}`,{by:by,booked:true,topic:topicSelected},{
                'headers':{
                    'Authorization': (auth.token ? auth.token : "")
                }
             }).then(res=>{
                 console.log(res)
             })

             const selectSlot = availSlot.map(slot=>{
             if(slot._id === id ){
               return {...slot,booked:!slot.booked}
             }else{
               return {...slot}
             }
             })
             setAvailSlot(selectSlot) 
             setOpen(false) 
             setTopicSelected([])         
        }catch(err){
             console.log(err)
        }
  }
	return(
		   <div>
          <div className="w-full mt-2">
            <h2 className="text-xl">Slots</h2>            
          </div>
    
          <div className="h-32 border shadow-inner bg-[#f3f3f3] overflow-y-auto mt-2 p-2">
            <div className="flex flex-wrap  gap-2">      
               {
                 availSlot ? availSlot.map((s,i)=>{
                  if(s.date === moment(date).format("DD MMM YYYY")){
                    return (
                          <div key={s._id} onClick={()=>openModal(s.time,s.by,s._id,s.price,s.duration,topic)} className={`text-xs border border-black text-white hover:bg-opacity-90 rounded cursor-pointer  flex justify-between`}>
                             <button className={`bg-black px-2  p-1 rounded-l ${s.booked ? "bg-gray-500":"bg-black"}`} disabled={s.booked}>{s.time}</button> 
                             <button className={`bg-gray-100 px-2   p-1 ${s.booked ? "bg-gray-500 text-white":"bg-black text-black"}`} disabled={s.booked}>{s.duration}</button>
                             <button className={`bg-orange-500 px-2  p-1 ${s.booked ? "bg-gray-500":"bg-black"}`} disabled={s.booked}>{s.price}</button>
                          </div>
                      )
                  }
                 }):
                 <>No slots Available</>
               }
            </div>

            <div className="">
                <Modal isOpen={open} style={bg} className="max-w-md mx-auto border border-black bg-white h-fit mt-40">
                  <div className="p-2 flex justify-center items-center">
                    <div className="flex flex-col">

                     <img className="w-20" src={bio.avatar} />
                     <div className="grid grid-cols-1 md:grid-cols-2">
                       
                             <span className="font-semibold">Interviewer Name</span>
                            <span className="">{bio.fullname}</span>

                             <span className="font-semibold">Time</span>
                            <span className="">{paymentInfo.time}</span>

                             <span className="font-semibold">UserID</span>
                            <span className="">{paymentInfo.id}</span>

                             <span className="font-semibold">Duration</span>
                             <span className="">{paymentInfo.duration} Min</span>


                     </div>

                     <div className="font-semibold mt-2">Select Topic</div>
                     <div className="gap-2 flex flex-wrap py-2">
                        {
                            paymentInfo.topic && paymentInfo.topic.map((topic,index)=>{

                                return(
                                      <div key={topic._id} className={`${ topicSelected.some(ts => ts.id === topic._id)  ?"bg-blue-300":"bg-blue-500"} text-white px-2 rounded py-1 cursor-pointer`}  onClick={()=>chooseTopic(topic._id,topic.title)}>
                                          {topic.title}
                                      </div>
                                    )
                            })
                        } 
                    </div> 
                    <div className="flex gap-2 justify-center mt-2"> 
                    <div><button className="bg-green-500 text-white px-4 py-1 rounded" onClick={()=>scheduleSlot(paymentInfo.id,paymentInfo.by)}>Pay</button></div>
                    <div><button className="bg-red-500 text-white px-4 py-1 rounded" onClick={closeModal}>Cancel</button></div>
                    </div>
                    </div>
                  </div>
                </Modal>
            </div>

            </div>
            <div className="mt-2 flex gap-2 justify-center relative items-center">
               <button onClick={decrementDate} className={`text-black ${ date >= new Date() ?"opacity-100" :"opacity-50"}  absolute mr-32 border`}> <BsFillArrowLeftSquareFill/></button>
               <h1 className='text-sm font-semibold'>{moment(date).format("DD MMM YYYY")}</h1>
               <button onClick={incrementDate} className="text-black absolute ml-32"><BsFillArrowRightSquareFill/></button>
            </div>
          </div>
		)
}