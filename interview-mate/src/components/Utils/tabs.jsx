import {AiOutlineRight} from 'react-icons/ai'

export default function Tabs({expand,expandTab,title,tabIndex}){
	return(
		   <div className="flex text-2xl items-center gap-5 justify-between">
             <h1 className="py-3">{title}</h1>
             <div className={`border border-black bg-black text-white cursor-pointer ${expandTab[tabIndex]? "rotate-90":"rotate-0"} transition-all`} onClick={()=>expand(tabIndex)}><AiOutlineRight/></div>
          </div>
		)
}