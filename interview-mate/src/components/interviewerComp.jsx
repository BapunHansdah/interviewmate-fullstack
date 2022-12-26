import InterviewerPost from './interviewerPost'
import {Link,useNavigate} from 'react-router-dom'


export default function InterviewComp({query}){
	return(
           <div>
                  <div className="px-5">
                    <h1 className="text-2xl"><span className="font-semibold">Topic : </span>{query}</h1>
                  </div>
                  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5`}>
	                   <InterviewerPost query={query}/>
                   </div>
                  <div className="flex items-center justify-center"><Link to={`/search/${query}`}><button className="bg-black text-white px-4 py-2">Browse More</button></Link></div>
           </div>
		)
}