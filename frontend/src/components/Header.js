import {React} from 'react'
import './Header.css'
import olxlogo from '../static/olxlogo.webp';
const Header  = ()=> {

return(

<div>


    <div className='flex p-3 h-20 justify-evenly  bg'> 

<div className='w-1/12'>

</div>
<div className='flex w-4/6'>
<div className="bg-white w-20 h-15 ">
  <img className="object-scale-down h-full w-full" src={olxlogo} />
</div>
   
<form className='w-8/12 px-5 pr-8 bg-dark'>   
    {/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
    <div className="relative">
        
        <input type="search" id="default-search" className="block w-10/12 p-4 ps-10 text-sm text-gray-900  custom-border" placeholder="Search Cars,bikes..." required />
        
        <button type="submit" className=" w-2/12 text-white absolute end-1 top-0 h-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Search</button>
    </div>
</form>


<button type="button" className="bg-transparent text-xl px-2 pr-3 "><p className='underline font-semibold'>Login</p></button>


<button type="button" className="py-2 px-5 me-2 mb-1 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-800 dark:border-gray-600 dark:hover:text-dark dark:hover:bg-white-700 w-24">Sell</button>

</div>
<div className='w-1/12'>

</div>


<div>





</div>
    </div>

    <div className='flex mt-2'>
    <div className='w-1/12'></div>

<div className='w-10/12 flex justify-evenly'>
<a href="#" class="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Read more</a>

<a href="#" class="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Read more</a>
<a href="#" class="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Read more</a>
<a href="#" class="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Read more</a>
<a href="#" class="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Read more</a>
<a href="#" class="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Read more</a>
<a href="#" class="font-medium text-dark-600 dark:text-dark-500 hover:underline hover:dark:text-blue-500 ">Read more</a>



</div>


<div className='w-1/12'></div>
    </div>

    </div>
)


}

export default Header;