import {React} from 'react'
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import Post from './Post';
import LoginModal from './LoginModal';  
import SignUpModal  from  './SignUpModal';
import {useState} from 'react'
 


const Home  = ()=> {

    const [loginModalOpened,changeLoginModalOpened] = useState(false)
    const [signUpModalOpened,changesignUpnModalOpened] = useState(false)

    const handleLoginModal = ()=> {
        changeLoginModalOpened(!loginModalOpened)
        changesignUpnModalOpened(false)
       
    }
    const handleSignUpModal = ()=>{

     changesignUpnModalOpened(!signUpModalOpened)
     changeLoginModalOpened(false)
    }
    

return(
    <div>
{/* Header component */}

<Header loginModal={handleLoginModal} signUpModal={handleSignUpModal}/>

<p className="text-4xl text-gray-900 dark:text-dark px-64 mt-8 mb-5 ">Fresh Recommendations</p>

<div className=' flex flex-wrap px-64 justify-evenly'>
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />



</div>

<LoginModal modalStatus={loginModalOpened}/>
<SignUpModal modalStatus={signUpModalOpened}/>

<Footer />



    </div>

)


}

export default Home;