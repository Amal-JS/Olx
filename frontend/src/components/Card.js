import {React} from 'react'

import olxlogo from '../static/olxlogo.webp';

const Card  = ()=> {

return(
   

<div className="w-72 max-w-sm max-h-72 bg-white  rounded-lg shadow dark:bg-white-800  m-3 p-1 shadow-2xl">
    <a href="#">
        <div>
        <img className="rounded-t-lg h-32 w-full" src={olxlogo} alt="" />
        </div>
        
    
    <div className="p-3 h-2/5">
        
            <h5 className="mb-1 text-xl  font-bold tracking-tight text-gray-900 dark:text-dark">Noteworthy</h5>
        
            <p className="mb-1 font-normal text-dark-700 dark:text-dark-400">of 2021 so far, in reverse chronological order.</p>
        
        <p className="mb-1 font-normal text-dark-400 dark:text-dark-400"> so far, in reverse chronological order.</p>
        
    </div>
    </a>
</div>


)


}

export default Card;