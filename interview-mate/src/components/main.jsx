import '../index.css'
import InterviewerComp from './interviewerComp'
import MainSection from './mainSection'



function Main(){

	return(	
		<div className="max-w-[1440px] mx-auto">
             <MainSection />
             <div className="max-w-[1200px] flex flex-col gap-5 mx-auto mt-10">
                <InterviewerComp query={"frontend"}/>
                <InterviewerComp query={"backend"}/>
             </div>

		</div>
	)
}

export default Main;