import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'


export default function Comments({reviewData}){

    // console.log(reviewData)
	return(
           <>
             {
                reviewData.map((r,i)=>{
                    return (

                         <div className="border p-2" key={i}>

                            <div className="flex gap-2 flex-col ">

                <div className="flex gap-2">
                     <div><img className="w-10" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/></div>
                    <div>
                       <h1 className="font-semibold "><Link to="/profile">{r.by}</Link></h1>
                       <div className="flex items-center gap-2 text-sm text-gray-800">{r.rating}<AiFillStar style={{color:"yellow"}}/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
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
         </>
		)
}