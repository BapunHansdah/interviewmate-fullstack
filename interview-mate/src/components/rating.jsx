import {useState,useEffect} from 'react'
import axios from 'axios'


export default function Rating({id}){
 

const [rating ,setRating] = useState()
const [loading,setLoading] = useState(true)




async function getToken(id){
   try{
      const res1 = await axios.get(`/api/public/rating/${id}`).then(res=>{

         setRating(res.data)
         setLoading(false)

     })
   }catch(err){
      setLoading(false)

   }
}

useEffect(()=>{
   getToken(id)
},[])

if(loading){
   return<>loading..</>
}


  const a = rating.reduce((acc,obj)=>{
      if(obj.completed === true){
         acc.completed += 1
         acc.rating = acc.rating + obj.rating
      }
      return acc
    },{completed:0,rating:0})
     
    console.log(rating,a)






   return(
        <>
          {a.completed ? <> {(a.rating/a.completed).toFixed(1)}/5 </> : <>No reviews yet</>}
        </>
      )
}

