import {Link,useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {BsSearch} from 'react-icons/bs'


export default function Search(){

const [topicRecommandation,setTopicRecommandation] = useState([{id:1,title:"frontend"},{id:2,title:"backend"},{id:3,title:"fullstack"},{id:4,title:"business"}])
const [queryName,setQueryName] = useState("")
const [recom,setRecom] = useState(false)

function searchHandleChange(e){
    setQueryName(e.target.value)
    setRecom(true)
}

function close(){
    setRecom(false)
    // setQueryName("")
}

console.log(recom)

	return(
		   <div className="p-2 flex flex-col lg:flex-col justify-start shadow bg-white mb-5">
               {/*<h1 className="text-xl  text-center font-semibold mb-2">Search Your Topic</h1>*/}
                 <div className="mt-5 flex flex-col lg:flex-row items-center">
                     <div className="w-full lg:w-8/12 relative">
                        <input className="w-full p-2 border bg-white border-black" onChange={searchHandleChange}/>
                        <div className="w-full border bg-black z-20 absolute">
                         {
                         recom && topicRecommandation.filter(topic=> queryName.length === 0 ? null : topic.title.includes(queryName)).map((topic,index)=>{
                          return(
                                <div key={topic.id}>
                                  <Link  to={`/search/${topic.title}`}><button onClick={close} className={`w-full p-2 text-white z-10`}>{topic.title}</button></Link>
                                </div>
                            )
                          }).slice(0, 3)
                         }
                         </div>
                     </div>
                     <div className="w-full lg:w-4/12" onClick={close}><Link to={`/search/${queryName}`}><button className="p-2 w-full bg-black text-white flex items-center justify-center gap-2"><BsSearch/>Search</button></Link></div>
                </div>
             </div> 
		)
}