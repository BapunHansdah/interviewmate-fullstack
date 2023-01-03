import {AiOutlineRight} from 'react-icons/ai'
import {useState} from 'react'

import Tab from '../Utils/tabs'

export default function Level({level,handleChange}){

   
   const LevelArray = [{id:1,level:'Beginner'},{id:2,level:'Intermadiate'},{id:3,level:'Export'}]
   
	return(
           <div className="flex flex-col gap-2 pb-4">
           {
             LevelArray.map((m,i)=>{
                return (
                    
                        <div key={m.id} className="flex gap-2 items-center">
                            <input type="checkbox" onChange={handleChange} checked={level.includes(m.level)? true: false} name={m.level}/>
                            <label htmlFor={m.level}>{m.level}</label>
                        </div>           
                    
                  )
             })
           }
           </div>
		)
}