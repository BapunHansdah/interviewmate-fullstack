import {useState,useEffect} from 'react'
import axios from 'axios'
import useAuth from '../useAuth'

export default (query,page)=>{
 // const [query,setQuery] = useState({})
 const [loading,setLoading] = useState(true)
 const [profileData,setProfileData] = useState([])
 const [pageNumber,setPageNumber] = useState(0)
 const [countUsers,setCountUsers] = useState(0)
 const [rating ,setRating] = useState(0)
const [price , setPrice] = useState(0)
const [level , setLevel] = useState(["Beginner","Intermadiate","Export"])
const [filter,setFilter] = useState({rating:0,price:0,level:["Beginner","Intermadiate","Export"]})


async function getProfileData(){
      
        try{
             await axios.get(`/api/public/feed/${query}/${pageNumber}/${filter.price}/${filter.rating}/${filter.level}`).then(res=>{
                  setProfileData(res.data.users)
                  setCountUsers(res.data.countUsers)
                  setLoading(false)
                  console.log(res.data.users)
             })
        }catch(err){
            console.log(err)
            setLoading(false)
        }
     }

  function setPage(num){
     setPageNumber(num)
  }

 useEffect(()=>{
    getProfileData()
 },[query,pageNumber,filter.price,filter.rating,filter.level])


    function handleChangeLevel(e){
     const lev = level.some(l=>{
        return  l === e.target.name
      })
     
     if(!lev){
       setLevel([...level,e.target.name])
     }else{
       setLevel(level.filter(f=>f !== e.target.name))
     }
   }

   function handleChangePrice(e){
     setPrice(e.target.value)
   }

   function handleChangeRating(e){
     setRating(e.target.value)
   }

   function applyFilter(){
      setFilter({rating,price,level})
   }

   function resetFilter(){
      setRating(0)
      setPrice(0)
      setLevel(["Beginner","Intermadiate","Export"])
      setFilter({rating:0,price:0,level:["Beginner","Intermadiate","Export"]})
   }



 return {loading,profileData,countUsers,pageNumber,setPage,level,price,rating,handleChangeLevel,filter,handleChangePrice,handleChangeRating,applyFilter,resetFilter}

}
