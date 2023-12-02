import { React , useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Post from "./Post";
import ToastComponent from "./Toast";
import axios from 'axios'



   
function showDialog() {
  
    let dialog = document.getElementById("SignUpDialog");
    if (dialog) {
      dialog.classList.remove("hidden");
      setTimeout(() => {
        dialog.classList.remove("opacity-0");
      }, 20);
    }
  }
  
  function hideDialog() {
    
    let dialog = document.getElementById("SignUpDialog");
    if (dialog) {
      dialog.classList.add("opacity-0");
      setTimeout(() => {
        dialog.classList.add("hidden");
      }, 500);
    }
  }



  
const SignUpModal = ({modalStatus,onSignUpSuccess}) => {

  console.log('SignUpmodal')

    const [newUser,changeNewUserDetails] = useState({username:'',password:'',email:'',phone:''})
    const [toastMessage, setToastMessage] = useState("");
    const navigate = useNavigate();


    // based on the change in the modalStatus true or false  calls the showDialog or hideDialog function
    
    useEffect(() => {
      if (modalStatus) {
        showDialog();
      } else {
        hideDialog();
      }
    }, [modalStatus]);


    

  const handleInput =(e)=> {
    const { id, value } = e.target;

  

    
    // Update the state based on the input field's id
    changeNewUserDetails((prevState) => ({
      ...prevState,
      [id]: value
    }));

   
  }



  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let flag = 0;
  
    for (const key in newUser) {
      if (newUser.hasOwnProperty(key)) {
        if (newUser[key] === '') {
          
          setToastMessage(`All fields are necessary`);
          flag = 1;
        }
      }
    }
  
    if (flag === 1) {
      // Return or handle the error state
      return;
    } else {
      
      //axios
      await axios.post('http://localhost:8000/user/',newUser)
      .then(res=>{
        
        if(res.data.userCreation){
          onSignUpSuccess()
        }
        else{
        
          let error_msg =  '';

          for (let key in res.data) {
            if (res.data.hasOwnProperty(key)) {
              error_msg = String(res.data[key]) + ','
            }
          }
        
          setToastMessage(error_msg)
        }
      })
      .catch(err=>alert(err))

      
    }
  };
  
  return (
    <div>
   

      <div
        id="SignUpDialog"
        className="fixed left-0 top-0 bg-transparent opacity-2 hidden w-screen h-screen transition-opacity  "
        onClick={() => hideDialog()}
      >
        <div
          className="bg-white rounded shadow-md p-5 mx-auto  my-5 w-1/4 h-11/12"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-end">
            <i
              className="fa-solid fa-xmark text-3xl"
              onClick={() => hideDialog()}
            ></i>
          </p>
          
        <div className="p-5 mx-10 ">
            <p className="font-bold text-center text-2xl">Olx</p>
        </div>
          <div className="w-full p-3 m-3 rounded">
            <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                >
                  Your Username
                </label>
                <input
                  type="username"
                  id="username"
                  defaultValue={newUser.username}
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Username"
                  
                  onChange={handleInput}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={newUser.email}
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="name@flowbite.com"
                  
                  onChange={handleInput}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  defaultValue={newUser.phone}
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="92200299202"
                  
                  onChange={handleInput}
                />
              </div>
              
              <div className="mb-5">
                <label
                  htmlFor="passwordfield"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  defaultValue={newUser.password}
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark  focus:ring-green-500 dark:focus:border-green-500"
                  
                  placeholder="password"
                  onChange={handleInput}
                />
              </div>
            </form>
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <button className="bg-red-500 px-6 py-2 rounded text-white hover:bg-red-600" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </div>
      </div>


      {toastMessage && (
        <ToastComponent message={toastMessage} onClose={() => setToastMessage("")} />
      )}
      
    </div>
  );
};

export default SignUpModal;
