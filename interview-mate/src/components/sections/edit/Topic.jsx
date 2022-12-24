import List from '../../Utils/list'

export default function InterviewerTopic({submitTopicData,handleChangeTopicData,topicData,deleteTopic,setTopicData,topics}){
    return(
	<>
	      <form onSubmit={submitTopicData} className="max-w-sm flex  gap-2 flex-col sm:flex-row w-full my-4">
             <input onChange={handleChangeTopicData} className="border p-1 w-full sm:w-9/12" value={topics} required={true}/>
             <button className="border w-full sm:w-3/12 p-1 bg-black text-white">Add Topics</button>
          </form>
          <List data={topicData} name="topic" setData={setTopicData}/>
	</>
        )

}