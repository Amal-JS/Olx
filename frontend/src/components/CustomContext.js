import {useContext , createContext ,useState ,useEffect} from 'react'


//global context object
const MyContext = createContext()

//component which holds the global state
export const  CustomContext = ({children}) => {
    console.log('Custom context')
    const [globalObject , setGlobalObject] = useState(

        //global state contains the an object that holds a key which is userloggedin true or false and a key user and value username of logged in user
        {
            userLoggedIn : false,
            user : {username:''},
         
    })

    // function to update the state
    const updateGlobalObject  = (newState)=>{
        setGlobalObject(newState)

    }

    return (

        //Made the custom context and returning the Mycontext with the value an object which holds the userloggedin and username 
        //returning it
        //Without passing the children prop and rendering the children within the <MyContext.Provider>, 
        //the nested components wouldn't have access to the context provided by <MyContext.Provider>
        <MyContext.Provider value={{globalObject,updateGlobalObject}} >
            {children}
        </MyContext.Provider>
    )
}


//get the global context object
export  const GetContext =()=>{

    return useContext(MyContext)
}