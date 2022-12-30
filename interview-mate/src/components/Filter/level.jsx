import {AiOutlineRight} from 'react-icons/ai'

import Tab from '../Utils/tabs'

export default function Level(){
	return(
                             <div className="flex flex-col gap-2 pb-4">

                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" id="Beginner"/>
                                    <label htmlFor="html">Beginner</label>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                    <input type="checkbox" id="Intermediate"/>
                                    <label htmlFor="css">Intermediate</label>
                                 </div>
                                 <div className="flex gap-2 items-center">
                                     <input type="checkbox" id="Export"/>
                                     <label htmlFor="javascript">Export</label>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                     <input type="checkbox" id="Alllevels"/>
                                     <label htmlFor="javascript">All levels</label>
                                  </div>
                             </div>
		)
}