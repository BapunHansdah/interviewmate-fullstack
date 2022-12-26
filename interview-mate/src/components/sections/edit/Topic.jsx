import List from '../../Utils/list'
import axios from'axios'
import {useState} from 'react'
import useAuth from '../../useAuth'

export default function InterviewerTopic({topicRecommandation,submitTopicData,handleChangeTopicData,topicData,deleteTopic,setTopicData,topics}){
     const {auth} = useAuth()
    

    console.log(topicData)
    async function deleteTopic(id){
        console.log(id)
     try{
        await axios.delete(`/api/user/deletetopic/${id}`,{
            'headers':{
                 'Authorization':(auth.token ? auth.token : "")
             }
        }).then(res=>{
            console.log(res)
            setTopicData(topicData.filter((s,i)=> s._id !== id))
        })
     }catch(err){
        console.log(err)
     }

  }

 
  
    return(
	<div className="h-60">
	      <div className="max-w-sm flex  gap-2 flex-col sm:flex-row w-full  my-4">
            <div className="w-full sm:w-9/12 relative">
             <input onChange={handleChangeTopicData} placeholder="Search topics" className="border border-black px-2 py-1 w-full" value={topics}/>
             <div className="w-full border bg-black z-20 absolute">
             {
                topicRecommandation.filter(topic=> topics.length === 0 ? null : topic.title.includes(topics)).map((topic,index)=>{
                      return(
                            <button key={topic.id} className={` p-2 w-full text-white z-10`} onClick={()=>submitTopicData(topic.title)}>{topic.title}</button>
                        )
                }).slice(0, 3)
             }
             </div>
        
             </div>
             {/*<div className="w-full sm:w-3/12 "><button className="border w-full p-2 bg-black text-white">Add Topics</button></div>*/}
          </div>
          <div className=" border h-full bg-gray-100 shadow-inner">
          <div className="gap-2 flex flex-wrap p-2">
            {
                topicData && topicData.map((topic,index)=>{

                    return(
                          <div key={topic._id} className="bg-blue-500 text-white px-2 rounded py-1 cursor-pointer" onClick={()=>deleteTopic(topic._id)}>
                              {topic.title}
                          </div>
                        )
                })
            } 
            </div>             
          </div>
          {/*<div>
              Your recommand topics
             <input onChange={handleChangeRecommandTopicData} placeholder="Search topics" className="border border-black px-2 py-1 w-full" value={topicsRecommanded}/>
          </div>*/}
          {/*<List data={topicData} name="topic" setData={setTopicData}/>*/}
	</div>
        )

}