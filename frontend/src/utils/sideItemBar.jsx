import { faCircleUser } from "@fortawesome/free-regular-svg-icons"
import { faBookMedical, faList} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const sideItemBar = () => {
  return (
    <div className='fixed lgs:bottom-8  lgs:w-[35vw] lgs:h-[5rem] sms:flex items-center rounded-full justify-center bg-blue-400 z-40 transition-all duration-300'
    style={{
        boxShadow:'inset 0 6px 4px rgba(0,0,0,0.2)'
    }}>

        <div className='flex items-center justify-center lgs:h-[5rem] space-x-5'>
            <div className='flex h-auto w-[9vw] items-center justify-center rounded-full space-x-2 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faCircleUser} className="h-8 text-primary lgs:pl-2"/>
                <h2 className="text-primary font-ibmplexsans text-md">Profile Details</h2>
            </div>

            <div className='flex h-auto w-[9vw] items-center justify-center space-x-2 cursor-pointer  hover:scale-110 transition-transform duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faList} className="h-8 text-primary"/>
                <h2 className="text-primary font-ibmplexsans text-md">Records</h2>
            </div>

            <div className='flex h-auto w-[9vw] items-center justify-center space-x-2 cursor-pointer  hover:scale-110 transition-transform duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faBookMedical} className="h-8 text-primary"/>
                <h2 className="text-primary font-ibmplexsans text-md">Health Card</h2>
            </div>

        </div>
      
    </div>
  )
}

export default sideItemBar
