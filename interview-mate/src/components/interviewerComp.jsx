import InterviewerPost from './interviewerPost'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'
import useQuery from './Hooks/getQuery'

export default function InterviewComp({query}){


const {loading,profileData,countUsers,pageNumber,setPage} = useQuery(query)


  


	return(
           <div>
                  <div className="px-5">
                    <h1 className="text-2xl"><span className="font-semibold">Topic : </span>{query}</h1>
                  </div>
                  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5`}>
	                   <InterviewerPost profileData={profileData} countUsers={countUsers} pageNumber={pageNumber} setPage={setPage} loading={loading} filter={{rating:0,price:0,level:["Beginner","Intermadiate","Export"]}} query={query}/>
                   </div>

           </div>
		)
}