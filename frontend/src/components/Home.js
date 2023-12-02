import { React , useState , useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from 'axios'
import { BASE_URL } from "../URL/urls";

const Home = () => {
  console.log('Home')

  const [posts,changePosts] = useState([])

  useEffect(()=>{

    //getting the initial posts
    axios.get(BASE_URL).then(res=>changePosts(res.data)).catch(err=>alert(err))

  },[])

  return (
    <div>
      

          <p className="text-4xl text-gray-900 dark:text-dark px-64 mt-8 mb-5 ">
            Fresh Recommendations
          </p>

          <div className=" flex flex-wrap px-64 justify-evenly">
         


            { posts && 
              posts.map(data => {
                return <Link to={`post/${data.id}`} key={data.id}> <Card data={data} /></Link>
              })
            }


            
          </div>

          
        
        
    </div>
  );
};

export default Home;
