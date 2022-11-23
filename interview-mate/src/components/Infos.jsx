export default function sample({submitInfo,handleChangeInfo,Info,Data}){


	return(
		  <>
		    <form className="py-5" onSubmit={submitInfo}>
         <div className=" w-full justify-between">
    			      <div className="sm:grid sm:grid-cols-2 gap-5">
                     <div>
                       <label className="my-2 font-semibold">
                          Full Name
                       </label>
                       <input onChange={handleChangeInfo} name="fullname" value={Info.fullname} className="my-1 w-full p-1 border"  required={true}/>
    					       </div>  
                      <div>
                      <label className="my-2 font-semibold">
                          Location
                      </label>
                      <input onChange={handleChangeInfo} name="location" value={Info.location} className="my-1 w-full border p-1"  required={true}/>
                      </div>

                      <div>
                      <label className="my-2 font-semibold">
                          Link
                      </label>
                      <input onChange={handleChangeInfo} name="website" value={Info.website} className="my-1 w-full p-1 border"/>
                      </div>  
                </div>
          </div>
          <div className="w-full mt-1">
            <label className="my-2 font-semibold">
			       Bio
		      	</label>
            <textarea onChange={handleChangeInfo} name="bio" value={Info.bio} className="text-sm text-gray-700 w-full p-1 border h-32"  required={true}/>
          </div>

          <div><button className="px-4 py-1 text-sm bg-black text-white">Save</button></div>

          </form>
          </>
		)
}