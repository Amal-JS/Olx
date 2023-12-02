import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Post from './components/Post';
import AddProduct from './components/AddProduct';

import { CustomContext } from './components/CustomContext';




const App = () => {

  return (
    
    <Router>
    <div>
      {/* Header component */}

      <CustomContext >
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path='addProduct/' element={<AddProduct />} />
        
      </Routes>


         <Footer />
         </CustomContext>

    </div>
  </Router>
  );
}

export default App;

