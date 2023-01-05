export default function Table({tableSection}){
	return(
		  <div className="flex font-bold">
                {   
                    tableSection.map(t=>{
                        return (
                               <div key={t.id} className={`w-${t.width} h-10 border flex items-center justify-center bg-black text-white`}>{t.tableName}</div>
                            )
                    })
                }
		    </div>
		)
}