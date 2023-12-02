import { React , useState , useEffect  } from "react";
import { useParams } from 'react-router-dom';
import avatar from "../static/avatar.jpg";
import axios from 'axios';
import { BASE_URL } from "../URL/urls";

const Post = () => {


  const {postId} = useParams()

console.log('Post')


  const [post,setPost] = useState({})

  useEffect(()=>{

 
      const url = `${BASE_URL}${postId}/`;

      axios.get(url)
        .then(res => {
          setPost(res.data)
        })
        .catch(err => alert(err));

  },[])



  return (
    <div className="flex p-5 justify-center mt-5" style={{backgroundColor:'#f2f4f5'}}>
     <div className="w-9/12 mt-9 mr-12 p-3">

        <div className=" bg-black px-20">
        <img className="max-h-96 w-full"  src={post.image}></img>
        </div>
        <div className="flex p-2 h-24 shadow-md">
        <img className="rounded mx-3 h-full w-2/12" src={post.image}></img>
        <img className="rounded mx-3 h-full w-2/12" src={post.image}></img>
        <img className="rounded mx-3 h-full w-2/12" src={post.image}></img>
        <img className="rounded mx-3 h-full w-2/12" src={post.image}></img>
        </div>
        <div className="">
        <p className="text-2xl text-left text-gray-900  dark:text-dark px-64 mt-8 mb-5 font-medium text-start">Details</p>
        </div>
        
        <div className=" w-full shadow-md p-10">

        <div className="flex justify-start m-2 "> Name : {post.name}</div>
        <div className="flex justify-start m-2"> Brand : {post.brand}</div>
        <div className="flex justify-start m-2"> Price : {post.price}</div>
        <div className="flex justify-start m-2"> Time span : {post.timespan}</div>
        <div className="flex justify-start m-2"> Place : {post.place}</div>


        </div>
        <div className="m-3">
        <p className="text-2xl text-left text-gray-900  dark:text-dark px-64 mt-8 mb-5 font-medium text-start">Description</p>
        </div>
        <div className="m-3 shadow-md p-3">
    <p>{post.description}</p>
        </div>
        <div >

        </div>

     </div>
     <div  className="w-3/12">

        <div className="bg-white p-3 mb-2 w=full mx-3 mt-9  ">

        <p className="text-2xl text-dark font-bold m-2">Rs {post.price}</p>

        <p className="text-xl text-dark font-normal mb-2">{post.name}</p>
        <div className="flex justify-between mx-2 mb-1">
        <p className="text-sm text-dark font-normal">{post.place} </p>
        <p className="text-sm text-dark font-normal">29-03-2020 </p>
        </div>
        
        </div>



        <div className="bg-white p-3 mb-2 w=full mx-3 mt-9  ">

<div className="flex items-center p-3 mt-1 mb-2">
<img className="h-12 w-12" src={avatar} />

<p className="font-bold text-dark text-center mx-2"> {post.user_username}</p>
</div>

<div className="border border-black p-3 mt-1 mb-2">
<p className="font-bold text-dark text-center"> Chat with seller</p>
</div>

<div className="flex justify-center mx-5 mt-5">
<i className="fa-solid fa-phone h-16 w-16"></i>
<p className='font-light'> ** *** **</p>
<a className="font-xs text-blue-600 underline ml-2">View Number</a>

</div>

</div>


<div className="bg-white p-3 mb-2 w=full mx-3 mt-9  ">


<div className=" mx-2 mb-1">
<p className="text-l text-dark font-bold mb-2">Posted in </p>
<p className="text-sm text-dark font-normal">Maharashtra </p>
</div>

</div>


<div className="flex justify-between mx-8">
<p className="text-sm text-black font-bold">AD ID 1722859347 </p>
<p className="text-sm text-black font-bold">Report this ad</p>
</div>




     </div>
    </div>
  );
};

export default Post;
