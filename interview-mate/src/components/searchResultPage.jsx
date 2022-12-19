import react from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {BsFillFilterSquareFill} from 'react-icons/bs'
import {FaSortAmountDown} from 'react-icons/fa'


import InterviewerPost from './interviewerPost'
import HeroSection from './herosections'

function SearchResult(){
	return(	
		<div className="max-w-[1440px] mx-auto">

             <div className="max-w-[1200px] flex flex-col justify-center lg:flex-row mx-auto gap-5 mt-10">
                       <div className="hidden  lg:w-3/12">
                          
                       </div>
                       <div className="lg:w-9/12 flex justify-between bg-white p-2 border">
                          <div className="px-2 py-1 flex items-center gap-2 cursor-pointer">Filter<BsFillFilterSquareFill/></div>
                          <div className="px-2 py-1 flex items-center gap-2 cursor-pointer">Sort by<FaSortAmountDown/></div>
                       </div>

             </div>      
             <div className="max-w-[1200px]  flex flex-col justify-center lg:flex-row mx-auto gap-5 mt-2">
{/*------------------------------------interviewer search ---------------------------------*/}                      
                       <div className="hidden lg:w-3/12 z-10">

                           <div className="p-2 flex flex-col lg:flex-col justify-start shadow bg-white mb-5">
                             <h1 className="text-xl  text-center font-semibold mb-2">Search Your Topic</h1>
                             <div className="flex items-center flex-col gap-2">
                              <input className='w-full p-1 border'/>
                              <button className='bg-black p-1 text-white w-full hover:bg-opacity-80'><Link to="/search">search</Link></button>
                             </div>
                           </div> 

                            <div className="px-2 flex flex-col lg:flex-col justify-start shadow py-5 bg-white">
                            <div className="border-y border-black p-5 ">
                              <div className="flex items-center justify-between gap-2 text-xl my-2">
                                 <h1 className="font-bold">Ratings</h1>
                                 <span className="text-md"><AiOutlineRight/></span>
                             </div>
                             <div className="flex flex-col gap-2">

                                <div className="flex gap-2 items-center">
                                    <input type="radio" id="3" name="fav_language" value="HTML"/>
                                    <label htmlFor="html">4.5 and Up</label>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                    <input type="radio" id="2" name="fav_language" value="CSS"/>
                                    <label htmlFor="css">4.0 and Up</label>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                     <input type="radio" id="1" name="fav_language" value="JavaScript"/>
                                     <label htmlFor="javascript">3.5 and Up</label>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                     <input type="radio" id="0" name="fav_language" value="JavaScript"/>
                                     <label htmlFor="javascript">2.5 and Up</label>
                                  </div>
                             </div>
                             </div>
                             <div className="border-b border-black p-5">
                              <div className="flex items-center justify-between gap-2 text-xl my-2">
                                 <h1 className="font-bold">Levels</h1>
                                 <span className="text-md"><AiOutlineRight/></span>
                             </div>
                             <div className="flex flex-col gap-2 hidden">

                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" id="Beginner" name="fav_language" value="HTML"/>
                                    <label htmlFor="html">Beginner</label>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                    <input type="checkbox" id="Intermediate" name="fav_language" value="CSS"/>
                                    <label htmlFor="css">Intermediate</label>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                     <input type="checkbox" id="Export" name="fav_language" value="JavaScript"/>
                                     <label htmlFor="javascript">Export</label>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                     <input type="checkbox" id="Alllevels" name="fav_language" value="JavaScript"/>
                                     <label htmlFor="javascript">All levels</label>
                                  </div>
                             </div>
                             </div>
                             <div className="border-b border-black p-5">
                              <div className="flex items-center justify-between gap-2 text-xl my-2">
                                 <h1 className="font-bold">Price</h1>
                                 <span className="text-md"><AiOutlineRight/></span>
                             </div>
                             <div className="flex flex-col gap-2">

                                <div className="flex gap-2 items-center hidden">
                                    <input type="range" id="3" name="range" value=""/>
                                    <label htmlFor="range">4.5 and Up</label>
                                 </div>
                             </div>
                             </div>
                           </div> 

                       </div>

{/*---------------------------------interviewer profiles--------------------------*/}
                  <div className="flex flex-col w-full lg:w-9/12 gap-10">
	                   <InterviewerPost />
	                   <InterviewerPost />
	                   <InterviewerPost />
	                   <InterviewerPost />
                      <div className="text-center"><button className="bg-black text-white py-1 px-2">Load More</button></div>
                   </div>
{/*------------------------------------right bar for sign up--------------------------------------*/}

                   
             </div>

		</div>
	)
}

export default SearchResult;