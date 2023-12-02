import {React} from 'react'


const Card  = ({data})=> {

    console.log('Card')

return(
   

<div className="w-72 max-w-sm max-h-72 bg-white  rounded-lg shadow dark:bg-white-800  m-3 p-1 shadow-2xl">
    
        <div>
        <img className="rounded-t-lg h-32 w-full" src={data.image   } alt="" />
        </div>
        
    
    <div className="p-3 h-2/5">
        
            <h5 className="mb-1 text-xl  font-bold tracking-tight text-gray-900 dark:text-dark">{data.name}</h5>
        
            <p className="mb-1 font-normal text-dark-700 dark:text-dark-400">{data.timespan}</p>
        
        <p className="mb-1 font-normal text-dark-400 dark:text-dark-400"> {data.place}</p>
        
    </div>


</div>
)

}
export default Card;