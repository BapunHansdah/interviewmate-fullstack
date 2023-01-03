import Tab from '../Utils/tabs'

export default function Price({price,handleChange}){


	return(
                             <div className="flex flex-col gap-2 pb-4">

                                <div className="flex gap-2 flex-col">
                                    <div className="text-center">Min price : {price} inr</div>
                                    <input onChange={handleChange} value={price} min="0" max="1000" type="range" id="3" name="range"/>
                                    <div className="flex justify-between">
                                    	<span>0 inr</span>
                                    	<span>1000 inr</span>
                                    </div>
                                 </div>
                             </div>
                           
		)
}