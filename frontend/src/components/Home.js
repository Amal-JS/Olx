import { React } from "react";

import Card from "./Card";

import { Link } from "react-router-dom";
import ToastComponent from "./Toast";

const Home = () => {
  

  return (
    <div>
      

          <p className="text-4xl text-gray-900 dark:text-dark px-64 mt-8 mb-5 ">
            Fresh Recommendations
          </p>

          <div className=" flex flex-wrap px-64 justify-evenly">
            <Link to="post/1"><Card /></Link>
            <Link to="post/2"><Card /></Link>
            <Link to="post/3"><Card /></Link>
            <Link to="post/4"><Card /></Link>
            <Link to="post/5"><Card /></Link>


            
          </div>

          
        
        
    </div>
  );
};

export default Home;
