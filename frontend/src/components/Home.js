import {React} from 'react'
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import Post from './Post';
import LoginModal from './LoginModal';  
import SignUpModal  from  './SignUpModal';


const Home  = ()=> {

return(
    <div>
{/* Header component */}

<Header/>
{/* <p className="text-4xl text-gray-900 dark:text-dark px-64 mt-8 mb-5 ">Fresh Recommendations</p>

<div className=' flex flex-wrap px-64 justify-evenly'>
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />



</div> */}

<LoginModal />
<SignUpModal />
<Footer />



    </div>

)


}

export default Home;