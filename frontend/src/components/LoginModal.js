import { React, useState, useEffect } from "react";
import ToastComponent from './Toast';
import { GetContext } from "./CustomContext";
import axios from "axios";


function showDialog() {
  
  let dialog = document.getElementById("loginDialog");

  if (dialog) {
    dialog.classList.remove("hidden");
    setTimeout(() => {
      dialog.classList.remove("opacity-0");
    }, 20);
  }
}

function hideDialog() {
 
  let dialog = document.getElementById("loginDialog");
  if (dialog) {
    dialog.classList.add("opacity-0");
    setTimeout(() => {
      dialog.classList.add("hidden");
    }, 500);
  }
}

//component
const LoginModal = ({modalStatus,onLoginSuccess}) => {
  console.log('Login modal')

  const [loginInfo,changeLoginInfo] =useState({loginEmail:'',loginPassword:''})
  const [toastMessage, setToastMessage] = useState("");
  const {globalObject,updateGlobalObject} = GetContext();

  //useeffect
  useEffect(() => {
    if (modalStatus) {
      showDialog();
    } else {
      hideDialog();
    }
  }, [modalStatus]);


  const handleLoginInput = (evt)=>{
    

    changeLoginInfo((prevState)=>{
      
     return {...prevState,
        [evt.target.id] : evt.target.value
      }

    })
  }

  const handleSubmit =async (evt) =>{
    evt.preventDefault();

    let flag = 0;
  
    for (const key in loginInfo) {
      if (loginInfo.hasOwnProperty(key)) {
        if (loginInfo[key] === '') {
          
          setToastMessage(`All fields are necessary`);
          flag = 1;
        }
      }
    }
  
    if (flag === 1) {
      // Return 
      return;
    } else {
      const data = { username: loginInfo.loginEmail, password: loginInfo.loginPassword };
      
// Convert the data object to query parameters
const queryParams = new URLSearchParams(data);

const url = `https://olx-git-master-olxclonees-projects-87d8cc23.vercel.app/user/1001?${queryParams}`;

      //axios
      await axios.get(url).then(res =>
      {
        if(res.data.validUser){

        
          
          localStorage.setItem('user',res.data.username)
     // Update globalObject only after localStorage is updated
     updateGlobalObject({
      
      userLoggedIn: true,
      user: { username: res.data.username }
    });
          
          onLoginSuccess();
        }
        else{
          setToastMessage(`Invalid credentials`);
        }
      }
      
      ).catch(err=>console.log(err))
     
     

      
    }
  }

  return (

    <div>
    

      <div
        id="loginDialog"
        className="fixed left-0 top-0 bg-transparent opacity-2 hidden w-screen h-screen transition-opacity  "
        onClick={() => hideDialog()}
      >
        <div
          className="bg-white rounded shadow-md p-5 mx-auto my-20 w-1/4 h-full"
          // prevent modal from closing outside of modal
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-end">
            <i
              className="fa-solid fa-xmark text-3xl"
              onClick={() => hideDialog()}
            ></i>
          </p>
          <div className="flex justify-center gap-5 shadow ">
            <div className="p-3 m-3 text-center">
              <i className="fa-solid fa-tv text-4xl m-3"></i>
              <p className="font-normal text-black-400 mb-2">
    
                Help us become the safest place to sell and buy.
              </p>
              <p className="mx-3 text-xl font-bold">Login </p>
            </div>
          </div>

          <div className="w-full p-3 m-3 rounded">
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                >
                  Your username
                </label>
                <input
                  type="text"
                  id="loginEmail"
                  defaultValue={loginInfo.loginEmail}
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="samplename"
                  required
                  onChange={handleLoginInput}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  defaultValue={loginInfo.loginPassword}
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark  focus:ring-green-500 dark:focus:border-green-500"
                  required
                  placeholder="password"
                  onChange={handleLoginInput}
                />
              </div>
            </form>
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <button className="bg-red-500 px-6 py-2 rounded text-white hover:bg-red-600" onClick={handleSubmit}>
              Sign in
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

export default LoginModal;
