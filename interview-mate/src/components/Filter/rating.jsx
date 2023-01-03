import Tab from '../Utils/tabs'
import {useState} from 'react'


export default function Rating({rating,handleChange}){

console.log(rating)
const ratingOptions = [{id:0,value:0},{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:4}]
  
	return(                         
           <div className="flex flex-col gap-2 pb-4">

             {
               ratingOptions.map((r,i)=>{
                   console.log(r.value)
                  return (
                        <div key={r.id} className="flex gap-2 items-center">
                            <input type="radio" name="rating" value={r.value} checked={r.value == rating ? true : false} onChange={handleChange}/>
                            <label htmlFor="rating">{r.value ? `${r.value} and Up` : "All"}</label>
                        </div>
                     )
               }).reverse()
             }

           </div>
		)
}