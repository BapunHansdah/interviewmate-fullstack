import heroImage from '../assets/images/undraw_developer_activity_re_39tg.svg'

import {Link} from 'react-router-dom'

function HeroImage(){
	return(	
		<div className="max-w-sm mx-auto">
             <img src={heroImage}/>
		</div>
	)
}

export default HeroImage;