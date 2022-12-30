import Tab from '../Utils/tabs'

export default function Price(){
	return(
                             <div className="flex flex-col gap-2 pb-4">
                                <div className="flex gap-2 flex-col">
                                   {/*<div className="flex items-center gap-2">
                                       <input type="checkbox" />
                                       <span>Free</span>
                                    </div>*/}

                                    <input type="range" id="3" name="range"/>
                                    <div className="flex justify-between">
                                    	<span>0 $</span>
                                    	<span>1000 $</span>
                                    </div>
                                 </div>
                             </div>
                           
		)
}