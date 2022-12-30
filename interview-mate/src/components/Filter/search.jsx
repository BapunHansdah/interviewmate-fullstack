import {Link,useParams} from 'react-router-dom'


export default function Search(){
	return(
		   <div className="p-2 flex flex-col lg:flex-col justify-start shadow bg-white mb-5">
                             <h1 className="text-xl  text-center font-semibold mb-2">Search Your Topic</h1>
                             <div className="flex items-center flex-col gap-2">
                              <input className='w-full p-1 border'/>
                              <button className='bg-black p-1 text-white w-full hover:bg-opacity-80'><Link to="/search">search</Link></button>
                             </div>
                           </div> 
		)
}