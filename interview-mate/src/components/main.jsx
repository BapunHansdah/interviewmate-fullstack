import react from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
import InterviewerPost from './interviewerPost'
import HeroSection from './herosections'

function Main(){
	return(	
		<div className="max-w-[1440px] mx-auto">

             <div className="flex flex-col gap-5 md:flex-row items-center max-w-[1000px] mx-auto mt-10 p-5">
                <div className="">
                   <h1 className="text-2xl md:text-4xl font-semibold text-center md:text-left">Prepare <br/><span className="text-4xl md:text-6xl text-blue-700">Mock Interviews</span></h1>
                </div>
             	<HeroSection/>
             </div>
             <div className="max-w-[1200px] flex flex-col lg:flex-row mx-auto gap-5 mt-10">
{/*------------------------------------interviewer search ---------------------------------*/}

                       <div className="lg:w-2/12">
                           <div className="p-2 max-w-sm mx-auto bg-white flex flex-col lg:flex-col justify-start lg:shadow">
                             <h1 className="text-xl  text-center font-semibold mb-2">Search Your Topic</h1>
                             <div className="flex items-center flex-col gap-2">
                              <input className='w-full p-1 border'/>
                              <button className='bg-black p-1 text-white w-full hover:bg-opacity-80'><Link to="/search">search</Link></button>
                             </div>
                           </div>                            
                       </div>

{/*---------------------------------interviewer profiles--------------------------*/}
                  <div className="flex flex-col w-full lg:w-7/12 gap-10">
	                   <InterviewerPost />
	                   <InterviewerPost />
	                   <InterviewerPost />
	                   <InterviewerPost />
                      <div className="text-center"><button className="bg-black text-white py-1 px-2">Load More</button></div>
                   </div>
{/*------------------------------------right bar for sign up--------------------------------------*/}

                   <div className="lg:w-3/12">
                   	  <div className="border p-2 flex flex-col md:flex-row lg:flex-col justify-between shadow bg-white">
                   	      <div>
                   	  	     <h1 className="text-xl  text-center font-semibold mb-5">Prepare for interviews to crack top companies</h1>
                   	  	     <button className='border w-full border-black text-black font-semibold text-sm px-2 py-1 hover:bg-black hover:text-white'>Sign Up as interviewee</button>
                   	  	   </div> 
                   	  	      <div className="text-center font-semibold my-5">OR</div>
                   	  	   <div>
                   	  	      <h1 className="text-xl  text-center font-semibold mb-5">Become a excellent interviewer and earn money</h1>
                   	  	      <button className='border w-full border-black text-black font-semibold text-sm px-2 py-1 hover:bg-black hover:text-white'>Sign Up as interviewer</button>
                   	      </div>
                   	  </div>
                   </div>

{/*------------------------------------right bar for search--------------------------------------*/}

             </div>

		</div>
	)
}

export default Main;