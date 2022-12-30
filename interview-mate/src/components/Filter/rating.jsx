import Tab from '../Utils/tabs'

export default function Rating(){
	return(
                                 
                                <div className="flex flex-col gap-2 pb-4">

                                   <div className="flex gap-2 items-center">
                                       <input type="radio" id="3"/>
                                       <label htmlFor="html">4 and Up</label>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                       <input type="radio" id="2" />
                                       <label htmlFor="css">3 and Up</label>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <input type="radio" id="1"/>
                                        <label htmlFor="javascript">2 and Up</label>
                                     </div>
                                     <div className="flex gap-2 items-center">
                                        <input type="radio" id="0"/>
                                        <label htmlFor="javascript">1 and Up</label>
                                     </div>
                                </div>
		)
}