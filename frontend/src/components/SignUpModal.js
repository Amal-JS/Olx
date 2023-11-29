import { React } from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Post from "./Post";

function showDialog() {
  console.log("shows");
  let dialog = document.getElementById("SignUpDialog");
  if (dialog) {
    dialog.classList.remove("hidden");
    setTimeout(() => {
      dialog.classList.remove("opacity-0");
    }, 20);
  }
}

function hideDialog() {
  console.log("hide");
  let dialog = document.getElementById("SignUpDialog");
  if (dialog) {
    dialog.classList.add("opacity-0");
    setTimeout(() => {
      dialog.classList.add("hidden");
    }, 500);
  }
}
const SignUpModal = () => {
  
  return (
    <div>
      <button className="px-4 py-2 rounded" onClick={() => showDialog()}>
        Open Modal
      </button>

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
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Username"
                  required
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
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="name@flowbite.com"
                  required
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
                  type="phone"
                  id="phone"
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="92200299202"
                  required
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
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:ring-green-500 dark:focus:border-green-500"
                  required
                  placeholder="password"
                />
              </div>
            </form>
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <button className="bg-red-500 px-6 py-2 rounded text-white hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
