import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Post from './components/Post';
import AddProduct from './components/AddProduct';





const App = () => {

  return (
    <Router>
    <div>
      {/* Header component */}

      
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path='addProduct/' element={<AddProduct />} />
        
      </Routes>


         <Footer />


    </div>
  </Router>
  );
}

export default App;

