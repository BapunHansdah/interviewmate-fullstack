import moment from 'moment'
import axios from 'axios'
import useAuth from '../useAuth'
export default function list({data,date,setData,name}){
     const {auth} = useAuth()

	 async function deleteSlot(id){
     try{
        await axios.delete(`api/${name}/delete/${id}`,{
            'headers':{
                 'Authorization':(auth.token ? auth.token : "")
             }
        }).then(res=>{
            console.log(res)
            setData(data.filter((s,i)=> s._id !== id))
        })
     }catch(err){
        console.log(err)
     }

  }
	

	return(
		  <div className="h-40 border shadow-inner bg-[#f3f3f3] overflow-y-auto mt-2 p-2">
          <div className=" flex  flex-wrap gap-2 justify-center">      
               {
                 data && data.filter(f=> f.date === moment(date).format("DD MMM YYYY") ).map((s,i)=>{
             
                    return (
                          <div key={s._id} className="text-xs text-white border border-black  hover:bg-opacity-90 rounded cursor-pointer bg-black flex justify-between">
                             <div className="bg-black px-2  p-1 rounded-l">{s.time}</div>
                             <div className="bg-gray-100 px-2  text-black p-1">{s.duration}</div>
                             <div className="bg-orange-500 px-2  p-1">{s.price}</div>
                             <div className="p-1  px-2 hover:bg-red-500 text-white rounded-r hover:text-white font-bold transition-all flex items-center" onClick={()=>deleteSlot(s._id)}>X</div>
                          </div>
                      )
                 
                 })
               }
            </div>
            </div>
		)
}