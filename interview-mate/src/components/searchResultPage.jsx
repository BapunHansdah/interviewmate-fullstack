import react,{useState,useEffect} from 'react'
import axios from 'axios'
import '../index.css'
import {Link,useParams} from 'react-router-dom'
// import {AiOutlineRight} from 'react-icons/ai'
// import {AiOutlineDown} from 'react-icons/ai'
import {BsFillFilterSquareFill} from 'react-icons/bs'
import {FaSortAmountDown} from 'react-icons/fa'
import Rating from './Filter/rating'
import Level from './Filter/level'
import Price from './Filter/price'
import Search from './Filter/search'
import Tab from './Utils/tabs'



import InterviewerPost from './interviewerPost'
import HeroSection from './herosections'

function SearchResult(){
 
const [profileData,setProfileData] = useState([])
const [loading,setLoading] = useState(true)
const {query} = useParams()
const [expandTab , setExpandTab] = useState([false,false,false])



 function expand(tab){
     const ex = expandTab.map((e,i)=>{
         if(i === tab){
            return !e
         }else{
            return e
         }
     })
     setExpandTab(ex)
   }


	return(	
		<div className="max-w-[1440px] mx-auto">

             <div className="max-w-[1200px] flex flex-col justify-center lg:flex-row mx-auto gap-5 mt-10">
                       <div className="  lg:w-3/12">
                          
                       </div>
                       <div className="lg:w-9/12 flex justify-between bg-white p-2 border">
                          <div className="px-2 py-1 flex items-center gap-2 cursor-pointer">Filter<BsFillFilterSquareFill/></div>
                          <div className="px-2 py-1 flex items-center gap-2 cursor-pointer">Sort by<FaSortAmountDown/></div>
                       </div>

             </div>      
             <div className="max-w-[1200px]  flex flex-col justify-center lg:flex-row mx-auto gap-5 mt-2">
{/*------------------------------------interviewer search ---------------------------------*/}                      
                       <div className="lg:w-3/12 z-10">

                           <Search />

                            <div className="p-2 flex flex-col lg:flex-col  justify-start shadow bg-white gap-2">

                               <Tab title={"Rating"} expand={expand} expandTab={expandTab}  tabIndex={0}/>
                               <div className={`${expandTab[0]? "h-full":"h-0"} overflow-hidden transition-all border-b border-black`}>
                                   <Rating />
                               </div>

                               <Tab title={"Level"} expand={expand} expandTab={expandTab}  tabIndex={1}/>
                               <div className={`${expandTab[1]? "h-full":"h-0"} overflow-hidden transition-all border-b border-black`}>
                                   <Level />
                               </div>

                               <Tab title={"Price"} expand={expand} expandTab={expandTab}  tabIndex={2}/>
                               <div className={`${expandTab[2]? "h-full":"h-0"} overflow-hidden transition-all border-b border-black`}>
                                   <Price />
                               </div>


                        </div> 

                       </div>

{/*---------------------------------interviewer profiles--------------------------*/}
                  <div className="flex flex-col w-full lg:w-9/12 gap-10">
	                   <InterviewerPost query={query}/>
                      <div className="text-center"><button className="bg-black text-white py-1 px-2">Load More</button></div>
                   </div>
{/*------------------------------------right bar for sign up--------------------------------------*/}

                   
             </div>

		</div>
	)
}

export default SearchResult;