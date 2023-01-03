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
import useQuery from './Hooks/getQuery'
import Pagination from './Utils/pagination'



import InterviewerPost from './interviewerPost'
import HeroSection from './herosections'

function SearchResult(){
 
const {query} = useParams()
const [expandTab , setExpandTab] = useState([true , true ,true])
const {loading,profileData,countUsers,pageNumber,setPage,handleChangeLevel,filter,handleChangePrice,handleChangeRating,applyFilter,resetFilter,level,price,rating} = useQuery(query)
const pageArray=new Array(countUsers).fill(0)
const [sideBar,setSideBar] = useState(false)

function showSideBar(){
   setSideBar(!sideBar)
}

console.log(level)

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
		<div className="max-w-[1440px] mx-auto px-2">

             <div className="flex flex-col justify-center lg:flex-row mx-auto gap-5 mt-10">
                       
                       <div className="w-full flex justify-between bg-white p-2 border">
                          <div className="px-2 py-1 flex items-center gap-2 cursor-pointer" onClick={showSideBar}>Filter<BsFillFilterSquareFill/></div>
                          <div className="px-2 py-1 flex items-center gap-2 cursor-pointer">Sort by<FaSortAmountDown/></div>
                       </div>

             </div>      
             <div className="flex flex-col justify-center lg:flex-row mx-auto gap-5 mt-2 relative">
{/*------------------------------------interviewer search ---------------------------------*/}                      
                       <div className={`w-full sm:w-6/12 lg:w-3/12 z-10 ${sideBar? "left-0 top-0":"-left-[2000px] w-full"} transition-all shadow-2xl  absolute bg-white px-3`}>

                          <div className="flex justify-center mt-4">Searched for &nbsp;<span className="text-md font-semibold">"{query}"</span> </div>

                           <Search />

                            <div className="p-2 flex flex-col lg:flex-col  justify-start shadow bg-white gap-2">

                               <Tab title={"Rating"} expand={expand} expandTab={expandTab}  tabIndex={0}/>
                               <div className={`${expandTab[0]? "h-full":"h-0"} overflow-hidden transition-all border-b border-black`}>
                                   <Rating
                                      rating={rating}
                                      handleChange={handleChangeRating} 
                                   />
                               </div>

                               <Tab title={"Level"} expand={expand} expandTab={expandTab}  tabIndex={1}/>
                               <div className={`${expandTab[1]? "h-full":"h-0"} overflow-hidden transition-all border-b border-black`}>
                                   <Level 
                                     level={level}
                                     handleChange={handleChangeLevel}
                                   />
                               </div>

                               <Tab title={"Price"} expand={expand} expandTab={expandTab}  tabIndex={2}/>
                               <div className={`${expandTab[2]? "h-full":"h-0"} overflow-hidden transition-all border-b border-black`}>
                                   <Price
                                     price={price}
                                     handleChange={handleChangePrice}
                                   />
                               </div>

                               <div className="grid grid-cols-2 gap-2">
                                  <button className="bg-black text-white px-2 py-1 " onClick={resetFilter}>Reset</button>
                                  <button className="bg-black text-white px-2 py-1 " onClick={()=>applyFilter(filter)}>Apply</button>
                               </div>

                        </div> 

                       </div>

{/*---------------------------------interviewer profiles--------------------------*/}
                  <div className="flex flex-col w-full gap-10">
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
	                      <InterviewerPost profileData={profileData} loading={loading} filter={filter} query={query}/>
                      </div>
                      <Pagination pageArray={pageArray} setPage={setPage} pageNumber={pageNumber}/>
                      
                   </div>
{/*------------------------------------right bar for sign up--------------------------------------*/}


                   
             </div>

		</div>
	)
}

export default SearchResult;