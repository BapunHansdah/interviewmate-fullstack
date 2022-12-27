import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'


export default function Comments({info}){
    
    console.log(info)
	return(
           <div className="mt-5">
            <h2 className="text-2xl">Reviews</h2>
           {
            info.length > 0  ?
            <div className="border p-2 flex flex-col gap-2 mt-4">
             {
                info.map((r,i)=>{
                    return (
                        <div className="border p-2" key={r._id}>
                          <div className="flex gap-2 flex-col ">
                            <div className="flex gap-2">
                                <div><img className="w-10" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/></div>
                                <div>
                                   <h1 className="font-semibold"><Link to={`/profile/${r.bookedBy.username}`}>{r.bookedBy.username}</Link></h1>
                                   <div className="flex items-center gap-2 text-sm text-gray-800">{r.rating}<AiFillStar style={{color:"yellow"}}/>  </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-800">
                                    {r.review}
                                </p>
                            </div>
                           </div>
                        </div>
                        )
                })
             } 
         
            </div>
            :
            <div className="mt-4">No Reviews Yet..</div>
            }
          </div>
		)
}