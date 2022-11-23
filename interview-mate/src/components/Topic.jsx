
export default function InterviewerTopic({submitTopicData,handleChangeTopicData,topicData,deleteTopic}){

    return(
	<>
	      <form onSubmit={submitTopicData} className="max-w-sm flex  gap-2 flex-col sm:flex-row w-full my-4">
             <input onChange={handleChangeTopicData} className="border p-1 w-full sm:w-9/12" required={true}/>
             <button className="border w-full sm:w-3/12 p-1 bg-black text-white">Add Topics</button>
          </form>
          <div className="h-32 border shadow-inner bg-[#f3f3f3] overflow-y-auto mt-2 p-2">
          <div className="w-full grid grid-cols-3  md:grid-cols-6 gap-2">      
               {
                 topicData && topicData.map((s,i)=>{
                    return (
                          <div key={i} className="px-2 py-1 w-full text-xs text-white hover:bg-opacity-90 rounded cursor-pointer bg-black flex justify-between">
                             <div>{s}</div>
                             <div className="px-2 hover:bg-red-500 text-white hover:text-white font-bold rounded-full transition-all" onClick={()=>deleteTopic(i)}>X</div>
                          </div>
                      )
                 })
               }
            </div>
        </div>
	</>
        )

}