
//import { Link } from 'react-router-dom';  // Import Link from react-router-dom
//import bwlogo from '../assests/baoswheelslogo.png';

//icons
import { faBookMedical, faCircleUser, faHomeLg} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

const Footerm = () => {
  //const [nav, setNav] = useState(false);



  return (
    <div className='fixed bottom-0 left-0 w-[100vw] h-[5rem] sms:flex items-center rounded-t-2xl justify-center sms: sms:justify-center bg-baseprimary z-40 transition-all duration-300'>

      <div className='flex justify-evenly items-center h-auto w-auto space-x-9'>
          <FontAwesomeIcon icon ={faAddressBook} className='text-primary h-8'/>
          <FontAwesomeIcon icon ={faHomeLg} className='text-primary h-8'/>
          
           {/* Main Navigation for Menus */}
          <div className='flex bg-primary items-center justify-center h-16 w-16 rounded-full ' style={{
            boxShadow:'inset 0 6px 6px rgba(65,105,225,0.5)'
          }}>
            <div className='bg-transparent h-10 w-10 border-2 rounded-full border-blue-700'/>
          </div>

          <FontAwesomeIcon icon ={faBookMedical} className='text-primary h-8'/>
          <FontAwesomeIcon icon ={faCircleUser} className='text-primary h-8'/>
      </div>


    </div>
  );
};

export default Footerm;
