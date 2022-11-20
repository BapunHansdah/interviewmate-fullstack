import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'


export default function Comments(){
	return(
          <div className="border p-2">

                 <div className="flex gap-2 flex-col ">

                <div className="flex gap-2">
			         <div><img className="w-10" src="https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"/></div>
		            <div>
		               <h1 className="font-semibold "><Link to="/user-profile">User 1</Link></h1>
		               <div className="flex items-center gap-2 text-sm text-gray-800">3.8<AiFillStar style={{color:"yellow"}}/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
		            </div>
		        </div>

			
                   <div>
                       <p className="text-sm text-gray-800">
                          heloo wooerfll heloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo 
                          heloo wooerfll heloo wooerfl gwegwegwegwgw
                          heloo wooerfll heloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo 
                          heloo wooerfll heloo wooerfl gwegwegwegwgw
                          heloo wooerfll heloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo wooerfllheloo 
                          heloo wooerfll heloo wooerfl gwegwegwegwgw
                       </p>
                    </div>
               </div>
          </div>
		)
}