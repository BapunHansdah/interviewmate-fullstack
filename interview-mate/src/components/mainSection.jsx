import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import HeroSection from './herosections'
import image1 from '../assets/images/19.svg'
import image2 from '../assets/images/55.svg'
import image3 from '../assets/images/64.svg'

export default function mainSection(){
const [queryName,setQueryName] = useState("")
const [topicRecommandation,setTopicRecommandation] = useState([{id:1,title:"frontend"},{id:2,title:"backend"},{id:3,title:"fullstack"},{id:4,title:"business"}])

function searchHandleChange(e){
    setQueryName(e.target.value)
}
	return(
		  <>

             <div className="flex flex-col gap-2 md:flex-row flex-col-reverse items-center max-w-[1200px] mx-auto mt-10 p-5">
                <div className="md:w-6/12">
                   <h1 className="text-2xl md:text-4xl font-semibold text-center md:text-left">conquer your<br/><span className="md:text-4xl text-2xl text-blue-700 text-center md:text-left uppercase font-extrabold">Interview Fears</span></h1>
                   <div className="mt-2 font-semibold text-center md:text-left text-gray-500">
                      <p>Welcome to our platform, where students can hone their interview skills and earn money as interviewers.
                Our platform connects interviewers and interviewees, allowing students to practice their interview skills and earn some extra cash.
                      </p>
                  
                   </div>
                  <div className="mt-5 flex flex-col md:flex-row items-center">
                     <div className="w-full md:w-8/12 relative">
                        <input className="w-full p-2 border bg-white border-black" onChange={searchHandleChange}/>
                        <div className="w-full border bg-black z-20 absolute">
                         {
                          topicRecommandation.filter(topic=> queryName.length === 0 ? null : topic.title.includes(queryName)).map((topic,index)=>{
                          return(
                                <div key={topic.id}>
                                <Link  to={`/search/${topic.title}`}><button  className={`w-full p-2 text-white z-10`}>{topic.title}</button></Link>
                                </div>
                            )
                          }).slice(0, 3)
                         }
                         </div>
                     </div>
                     <div className="w-full md:w-4/12"><Link to={`/search/${queryName}`}><button className="p-2 w-full bg-black text-white flex items-center justify-center gap-2"><BsSearch/>Search</button></Link></div>
                </div>
                </div>
                <HeroSection/>
             </div>

             <div className="max-w-[1200px] mx-auto font-semibold">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
               <img src={image2}/>
               <div className="px-3">
                <h2 className="text-2xl text-center md:text-left">Interview students & Earn</h2>
                <p className="text-gray-500 mt-2 text-center md:text-left">
                As an interviewer, you can create your own interview slots and set your own rates. Simply sign up and start booking interviews with eager interviewees.
               </p>
               </div>
               </div>
             </div>

             <div className="max-w-[1200px] mx-auto  font-semibold">
               <div className="md:grid flex flex-col-reverse md:grid-cols-2 items-center">   
               <div className="px-3">
                <h2 className="text-2xl text-center md:text-left">Find interviewer and practice</h2>
                  <p className="text-gray-500 mt-2 text-center md:text-left">  
                   As an interviewee, you can sign up and browse available interview slots to find the perfect opportunity to practice your interview skills. 
                   </p>
                </div>
               <img src={image1}/>
               </div>
             </div>


            <div className="max-w-[500px] mx-auto text-center font-semibold">
             <img src={image3}/>
            <p className="p-2 text-gray-500">
Our platform offers a variety of interviewers with different specialties and experience levels, ensuring you get the most out of your practice.
                   Don't let the fear of interviews hold you back. Sign up today and take control of your career. Practice makes perfect, and our platform is here to help you succeed.
             </p>
             </div>

             
		  </>
		)
}