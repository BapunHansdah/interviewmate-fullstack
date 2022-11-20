import logo from '../assets/images/logo.png'

export default function Footer(){
	return (
		   <div className="max-w-[1440px] mx-auto border-t py-5 mt-20">
		   <div className="max-w-[1110px] flex flex-col justify-center items-center md:grid gap-4 md:grid-cols-2 mx-auto px-5">
		       <div className="">
		         <div className="">Copyright @ 2022 Interviewmate</div>
		       </div>
		       <div className="flex flex-col gap-4 justify-center text-center md:flex-row md:justify-end">
		        <div className="text-sm hover:text-gray-500 cursor-pointer">Home</div>
		        <div className="text-sm hover:text-gray-500 cursor-pointer">Help</div>
		        <div className="text-sm hover:text-gray-500 cursor-pointer">Privacy Policy</div>
		       </div>
		   </div>
		   </div>
		)

}