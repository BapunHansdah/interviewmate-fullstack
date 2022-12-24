export default function topic({info}){
	return(
		  <div className="w-full mt-2">
            <h2 className="text-xl">Topic Intersted</h2>
            <div className="text-xs flex flex-wrap gap-1 mt-2">
                 { 
                 info ? info.map((topic,index)=>{
                    return (
                        <span key={topic._id} className="text-white rounded flex justify-center bg-blue-500  p-1">{topic.title}</span>
                      )
                  }) :
                  <>No Topics Available</>
                 }                   
              </div>
          </div>
		)
}