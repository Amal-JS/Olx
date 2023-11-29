import {useContext , createContext ,useState} from 'react'


//global context object
const MyContext = createContext()

//component which holds the global state
export const  CustomContext = ({children}) => {

    const [globalObject , setGlobalObject] = useState(

        {
            userLoggedIn : false,
            user : {},
            isSignUpModalOpened : false,
            isLoginModalOpened :false
    })


    const updateGlobalObject  = (newState)=>{
        setGlobalObject(newState)

    }

    return (
        <MyContext.Provider value={{globalObject,updateGlobalObject}} >
            {children}
        </MyContext.Provider>
    )
}


//get the global context object
export  const GetContext =()=>{

    return useContext(MyContext)
}