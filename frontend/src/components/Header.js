import {React , useState  } from 'react'
import './Header.css'
import olxlogo from '../static/olxlogo.webp';
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import {Link , useNavigate} from 'react-router-dom'
import { GetContext } from './CustomContext';
import ToastComponent from './Toast';


const Header  = ()=> {

  console.log('Header')
    
  const [loginModalOpened, changeLoginModalOpened] = useState(false);
  const [signUpModalOpened, changesignUpnModalOpened] = useState(false);

  const {globalObject,updateGlobalObject} = GetContext()
  const navigate = useNavigate();

  const [toastMessage, setToastMessage] = useState("");


  const handleLoginModal = () => {
   
    changeLoginModalOpened((prevState)=>!prevState);
    changesignUpnModalOpened(false);
  };

  const handleSignUpModal = () => {
  
    changesignUpnModalOpened((prevState)=>!prevState);
    changeLoginModalOpened(false);
  };

  const handleSuccessfulSignUp = () => {
    // Close the signup modal
    changesignUpnModalOpened(false);
   
    // Navigate to the home page
    changeLoginModalOpened(true);

  };


  const handleSuccessfulLogin = () => {
    // Close the signup modal
    changeLoginModalOpened(false);
    // Navigate to the home page
    // Navigate('/');

  };

  const handleLogout =()=>{


    updateGlobalObject({
      ...globalObject,
      userLoggedIn:false,
      user:{username:''}
    })

    
    localStorage.removeItem('user')

    navigate('/')

  }

  const handleAddProduct = ()=>{
    if (globalObject.userLoggedIn){
      navigate('/addProduct');
    }
    else{
      setToastMessage('User should be logged in')
    }
  }
return(
    

<div>


    <div className='flex p-3 h-20 w-full justify-center bg mb-5 pl-44'> 


<div className='flex w-full'>
<div className=" w-20 h-15 bg-transparent ">
    <Link to='/'><img className="object-scale-down h-full w-full" src={olxlogo} /></Link>
  
</div>
   
<form className='w-8/12 px-5 pr-8 bg-dark'>   
    {/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
    <div className="relative">
        
        <input type="search" id="default-search" className="block w-11/12 p-4 ps-10 text-sm text-gray-900  custom-border" placeholder="Search Cars,bikes..." required />
        
        <button type="submit" className=" w-1/12 text-white absolute end-1 top-0 h-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm p-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><i className="fa-solid fa-magnifying-glass text-xl"></i></button>
    </div>
</form>

{/* user logged in show the logout and username */}
{
globalObject.userLoggedIn ?   (
<div className='p-2 mx-2 flex'> 
<p className='text-bold'>Hello,<span className='text-2xl text-red-500'>{globalObject.user.username}</span></p>
<i className="fa-solid fa-door-open text-2xl mx-2" onClick={handleLogout}></i>
</div>)
:
(
  <div className='p-2 flex mx-2'>
<button type="button" className="bg-transparent text-xl  pr-5 w-16 "><p className='underline font-semibold hover:no-underline hover:text-red-500' onClick={handleLoginModal}>Login</p></button>

<button type="button" className="bg-transparent text-xl  pr-5 w-16 mx-5 "><p className='underline font-semibold hover:no-underline hover:text-red-500' onClick={handleSignUpModal}>SignUp</p></button>
  </div>
)
}






<button type="button" className="py-2 px-5 me-2 mb-1 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-800 dark:border-gray-600 dark:hover:text-dark dark:hover:bg-white-700 w-28" onClick={handleAddProduct}><i className="fa-solid fa-plus text-xl mr-2" ></i>Sell</button>

</div>



<div>





</div>
    </div>

    <div className='flex mt-2'>
    

<div className='w-10/12 flex justify-evenly'>
<a href="#" className="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Car</a>

<a href="#" className="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Mobile</a>
<a href="#" className="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Laptop</a>
<a href="#" className="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Homes</a>
<a href="#" className="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Furniture</a>
<a href="#" className="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Car</a>
<a href="#" className="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Car</a>



</div>



    </div>

    <LoginModal modalStatus={loginModalOpened} onLoginSuccess={handleSuccessfulLogin} />
          <SignUpModal modalStatus={signUpModalOpened} onSignUpSuccess={handleSuccessfulSignUp}/>

          {toastMessage && (
        <ToastComponent message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>

)


}

export default Header;