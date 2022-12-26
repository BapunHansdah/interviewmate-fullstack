import react,{useEffect,useState} from 'react'
import '../index.css'
import {Link,useNavigate} from 'react-router-dom'
import HeroSection from './herosections'
import useAuth from './useAuth'
import getUserInfo from './Hooks/getUserInfo'
import axios from 'axios'
import {setProfileData} from '../actions/index'
import {useDispatch} from 'react-redux'
import {BsSearch} from 'react-icons/bs'
import image1 from '../assets/images/19.svg'
import image2 from '../assets/images/55.svg'
import image3 from '../assets/images/64.svg'
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