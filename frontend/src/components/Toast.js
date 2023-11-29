import {React ,useState ,useEffect} from 'react'


const Toast = ({message}) => {
    const [isVisible, setIsVisible] = useState(true);
  

    useEffect(() => {
        // Close the toast after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    
        // Clear the timeout when the component unmounts or when toast is closed manually
        return () => clearTimeout(timeoutId);
      }, []);
    const handleClose = () => {
      setIsVisible(false);
    };

  
    return isVisible ? (
        <div
      id="toast-warning"
      className="flex items-center w-full max-w-xs p-4 text-red-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-red-600 fixed top-4 right-4"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-600 bg-orange-100 rounded-lg dark:bg-red-700 dark:text-orange-200">
        <svg
          className="w-5 h-5 bg-red-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
        <span className="sr-only">Warning icon</span>
      </div>
      <div className="ms-3 text-sm font-normal text-white">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-red-900 dark:hover:bg-red-900"
        data-dismiss-target="#toast-warning"
        aria-label="Close"
        onClick={()=>setIsVisible(false)}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
    ) : null;
  };
  

  const ToastComponent = ({message}) => {

    
    return (
      <div>
 <Toast message={message}/>
      </div>
    );
  };
  
  export default ToastComponent;