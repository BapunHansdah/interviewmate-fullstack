import {Link} from 'react-router-dom'

function Login(){
	return(	
		<div className="max-w-sm mx-auto">
             <form className="flex flex-col gap-2 mt-20 p-2">
                <h1 className="text-5xl font-semibold mb-2">Login</h1>
             	<input className="w-full p-2 border border-black" placeholder="email" />
             	<input className="w-full p-2 border border-black" placeholder="password" />
             	<button className="w-full p-2 bg-[#1c1c1c] text-white mt-2">Login</button> 
             	<p className="text-right text-sm">Forgot password ?</p>            	            	
             	<p className="text-center">Not register yet ? <span className="underline"><Link to="/signup">Create an account</Link></span></p>
             </form>
		</div>
	)
}

export default Login;