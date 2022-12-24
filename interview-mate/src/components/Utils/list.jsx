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
		  <div className="h-32 border shadow-inner bg-[#f3f3f3] overflow-y-auto mt-2 p-2">
          <div className=" flex  flex-wrap gap-2">      
               {
                 data && data.filter(f=>!f.date  ? f : f.date === moment(date).format("DD MMM YYYY")).map((s,i)=>{
             
                    return (
                          <div key={i} className="px-2 py-1 text-xs text-white hover:bg-opacity-90 rounded cursor-pointer bg-black flex justify-between">
                             <div>{s.time || s.title}</div>
                             <div className="px-2 hover:bg-red-500 text-white hover:text-white font-bold rounded-full transition-all" onClick={()=>deleteSlot(s._id)}>X</div>
                          </div>
                      )
                 
                 })
               }
            </div>
            </div>
		)
}