import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {useNavigate,Navigate} from 'react-router-dom'
import useAuth from '../useAuth'

function Login(){
	const [sign_info,setSign_info] = useState({})
   const dispatch=useDispatch()
   const navigate = useNavigate()
   const {auth,loading} = useAuth()

   async function signInUser(e){
   	e.preventDefault()
   	try{
   	  await axios.post('api/auth/signin',sign_info)
        refreshPage()
   	}catch(err){
   	  console.log(err)

   	}
   }

   function changeHandle(e){
   	setSign_info({...sign_info,[e.target.name]:e.target.value})
   }



   function refreshPage() {
     window.location.reload(false);
     return ;
  }

   // useEffect(()=>{
     
   // },[auth.isLoggedIn])

    if(loading){
       return <>loading</>
    }


   
   if(auth.isLoggedIn){
      return(
         <>
           <Navigate to="/" />
         </>
         )
   }


   
	return(	
		<div className="max-w-sm mx-auto">
             <form className="flex flex-col gap-2 mt-20 p-2" onSubmit={signInUser}>
                <h1 className="text-5xl font-semibold mb-2">Login</h1>
             	<input className="w-full p-2 border border-black bg-white" onChange={changeHandle} name="email" placeholder="email" />
             	<input className="w-full p-2 border border-black bg-white" onChange={changeHandle} name="password" placeholder="password" />
             	<button className="w-full p-2 bg-[#1c1c1c] text-white mt-2">Login</button> 
             	<p className="text-right text-sm">Forgot password ?</p>            	            	
             	<p className="text-center">Not register yet ? <span className="underline"><Link to="/signup">Create an account</Link></span></p>
             </form>
		</div>
	)
}

export default Login;