import {Link} from 'react-router-dom'
function SignUp(){
	return(	
		<div className="max-w-sm mx-auto">
             <form className="flex flex-col gap-2 mt-20 p-2">
                <h1 className="text-5xl font-semibold mb-2">Create Account</h1>
             	<input className="w-full p-2 border border-black" placeholder="username" />
             	<input className="w-full p-2 border border-black" placeholder="email" />
             	<input className="w-full p-2 border border-black" placeholder="password" />
             	<button className="w-full p-2 bg-[#1c1c1c] text-white mt-2">Sign Up</button> 
             	<p className="text-center">Already have an account ? <span className="underline"><Link to="/login">Log in</Link></span></p>
             </form>
		</div>
	)
}

export default SignUp;