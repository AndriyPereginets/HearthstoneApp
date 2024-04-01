import Oops from '../../resourses/opps.jpg'

import './error.css'

const ErrorDetected = () => {


    return (
        <div> 
            <p className='error_text'>Card not found <br/>Please try again</p>
            <img className='oops_logo' src={Oops} alt='error'/> 
        </div>
    )
}

export default ErrorDetected;