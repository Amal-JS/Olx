import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Post from './components/Post';




const App = () => {
  const customProps = { prop1: 'value1', prop2: 'value2' };

  return (
    <Router>
    <div>
      {/* Header component */}

      
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>

      
         <Footer />


    </div>
  </Router>
  );
}

export default App;

