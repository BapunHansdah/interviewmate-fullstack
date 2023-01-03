export default function pagination({pageArray,setPage,pageNumber}){
	return(
		  <div className="gap-2 flex flex-wrap justify-center p-2">
               <div><button className="bg-gray-500 px-5 py-1 text-white">Prev</button></div>
                  {
                      pageArray.filter((f,i)=> i <  pageArray.length/10).map((p,i)=>{
                         return(
                                <div key={i}><button className={` ${i===pageNumber?"bg-black":"bg-gray-500"} px-5 py-1 text-white`} onClick={()=>setPage(i)}>{i+1}</button></div>
                            )
                      })
                  }
               <div><button className="bg-gray-500 px-5 py-1 text-white">Next</button></div>
          </div>
		)
}