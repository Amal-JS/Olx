


import {React} from 'react'
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import Post from './Post';



function showDialog() {
    console.log('shows')
    let dialog = document.getElementById('dialog');
    if (dialog)
    {
        dialog.classList.remove('hidden');
        setTimeout(() => {
            dialog.classList.remove('opacity-0');
        }, 20);
    }
   
}

function hideDialog() {
    console.log('hide')
    let dialog = document.getElementById('dialog');
    if (dialog)
    {
        dialog.classList.add('opacity-0');
        setTimeout(() => {
            dialog.classList.add('hidden');
        }, 500); 
    }
    
}
const ModalComponent  = ()=> {


return(
    <div>
   <button className="px-4 py-2 rounded" onClick={()=>showDialog()}>Open Modal</button>


 

<div id="dialog" className="fixed left-0 top-0 bg-transparent opacity-2 hidden w-screen h-screen transition-opacity " onClick={()=>hideDialog()}>
    <div className="bg-white rounded shadow-md p-8 mx-auto my-20 w-1/4">
        <div className="flex items-center gap-5">
            <div className="bg-red-200 rounded-full p-5 text-red-500 flex items-center justify-center w-10 h-10">
                
            </div>
            <div>
                <h1 className="font-bold text-lg mb-2">Deactivate Account</h1>
                <p>Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
            </div>
        </div>
        <div className="flex justify-end gap-4 mt-5">
            <button className="bg-gray-100 border border-gray-300 px-6 py-2 rounded text-black hover:bg-gray-200" onClick={()=>hideDialog()}>Cancel</button>
            <button className="bg-red-500 px-6 py-2 rounded text-white hover:bg-red-600">Deactivate</button>
        </div>
    </div>
</div>


</div>



)


}

export default ModalComponent;