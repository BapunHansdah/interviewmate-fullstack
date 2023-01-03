import axios from 'axios'
import {useState,useEffect} from 'react'

export default function topicArr({topic}){

    return (
           <>
             {
                topic.map((m,i)=>{
                    return(
                          <span key={m._id} className="bg-blue-500 px-2 py-1 text-white rounded">{m.title}</span>
                        )
                })
             }
           </>
        )
}