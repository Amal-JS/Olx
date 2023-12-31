import ToastComponent from "./Toast";
import { React, useState, useEffect } from "react";
import { GetContext } from "./CustomContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  console.log('Add product')

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    timespan: "",
    price :0,
    place: "",
    image: "",
    description: "",
  });

  const [toastMessage, setToastMessage] = useState("");

  const { globalObject, updateGlobalObject } = GetContext();

  const navigate = useNavigate();

  //if someone access this url with logged in 
  useEffect(() => {
    if (!globalObject.userLoggedIn) {
      navigate("/");
    }
  });


  const handleChangeProduct = (evt) => {
    
    const { id, value, type, files } = evt.target;

    // Check if the input is a file input
    if (type === "file") {
      // Update the state with the selected file
      setProduct((prevState) => ({
        ...prevState,
        [id]: files[0], // Use files[0] to get the first selected file
      }));
    } else {
      // Update the state based on other input types
      setProduct((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let flag = 0;

    for (const key in product) {
      if (product.hasOwnProperty(key)) {
        if (product[key] === "") {
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
      let url = "http://localhost:8000/posts/";

      let formData = new FormData();

      formData.append("user", globalObject.user.username);

      // Append non-file fields to FormData
      for (const key in product) {
        if (product.hasOwnProperty(key) && key !== "image") {
          formData.append(key, product[key]);
        }
      }

      // Append file data separately
      formData.append("image", product.image);

      

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => 
        {
        
          if(res.data.postCreated){
            setToastMessage('Ad created')

            navigate('/')
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-black mt-8 p-3">
      <form className="max-w-lg mx-auto p-4  border bg-white mb-3">
        <div className="mb-5 ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Product Name
          </label>
          <input
            onChange={handleChangeProduct}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Smart Tv,,,,,"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Brand Name
          </label>
          <input
            type="text"
            id="brand"
            onChange={handleChangeProduct}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="If ..."
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            onChange={handleChangeProduct}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Smart Tv,,,,,"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Time Span
          </label>
          <input
            type="text"
            id="timespan"
            onChange={handleChangeProduct}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="If ..."
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Place{" "}
          </label>
          <input
            type="text"
            id="place"
            onChange={handleChangeProduct}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="If ..."
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
          >
            Description{" "}
          </label>
          <input
            type="textarea"
            id="description"
            onChange={handleChangeProduct}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="add a description to product"
          />
        </div>
        <div className="mb-5 p-2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <input
            accept=".jpg, .jpeg, .png"
            onChange={handleChangeProduct}
            className="block w-full p-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="image"
            type="file"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Add Product
          </button>
        </div>
      </form>

      {toastMessage && toastMessage !== "" && (
        <ToastComponent
          message={toastMessage}
          onClose={() => setToastMessage("")}
        />
      )}
    </div>
  );
};

export default AddProduct;
