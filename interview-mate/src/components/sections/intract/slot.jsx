import moment from 'moment'

export default function slot({data}){

// const [date, updateDate] = useState(moment(new Date()));

// //changing the date in slot
//   const incrementDate = () => {
//     updateDate(moment(date).add(1, "day"));
//   };
//   const decrementDate = () => {
//      if(date <= new Date() ){
//         return ;
//      }
//      updateDate(moment(date).subtract(1, "day"));
//   };

	return(
		   <div>
          {/*<div className="w-full mt-2">
            <h2 className="text-xl">Slots</h2>            
          </div>
          <div className="h-32 border shadow-inner bg-[#f3f3f3] overflow-y-auto mt-2 p-2">
            <div className="w-full grid grid-cols-3  md:grid-cols-6 gap-2">      
               {
                 data.slotdata ? data.slotdata.map((s,i)=>{
                  if(s.date === moment(date).format("DD MMM YYYY")){
                    return (
                          <div key={i} className="px-2 py-1 w-full text-xs text-white hover:bg-opacity-90 rounded cursor-pointer bg-black flex justify-between">
                             <div>{s.time}</div>
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
            </div>*/}
          </div>
		)
}