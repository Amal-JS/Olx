import {useContext , createContext ,useState ,useEffect} from 'react'


//global context object
const MyContext = createContext()

//component which holds the global state
export const  CustomContext = ({children}) => {
    console.log('Custom context')
    const [globalObject , setGlobalObject] = useState(

        {
            userLoggedIn : false,
            user : {username:''},
            isSignUpModalOpened : false,
            isLoginModalOpened :false
    })


    const updateGlobalObject  = (newState)=>{
        setGlobalObject(newState)

    }


    useEffect(()=>{
        const user = localStorage.getItem('user')
       
    })



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