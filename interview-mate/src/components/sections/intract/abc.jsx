import moment from 'moment'
import {useState} from 'react'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import useAuth from '../../useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function slot({info}){

const [date, updateDate] = useState(moment(new Date()));

const [availSlot,setAvailSlot] = useState(info)

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

  function openModal(id,price){
        Swal.fire({
          title: 'Do you want to schedule this slot ?',
          text:(`Price : ${price} $`),
          showCancelButton: true,
          confirmButtonText: 'Pay',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            scheduleSlot(id)
            Swal.fire("slot booked !!")
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
  }


  
  async function scheduleSlot(id){
       try{

             await axios.put(`/api/slot/schedule/${id}`,{booked:true},{
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
            <div className="w-full grid grid-cols-3  md:grid-cols-6 gap-2">      
               {
                 availSlot ? availSlot.map((s,i)=>{
                  if(s.date === moment(date).format("DD MMM YYYY")){
                    return (
                          <div key={s._id} className={`px-2 py-1 w-full text-xs text-white hover:bg-opacity-90 rounded cursor-pointer ${s.booked ? "bg-gray-500":"bg-black"} flex justify-between`}>
                             <button className="w-full" onClick={()=>openModal(s._id,30)} disabled={s.booked}>{s.time}</button>
                          </div>
                      )
                  }
                 }):
                 <>No slots Available</>
               }
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