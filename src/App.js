import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
// import NavBar from './components/NavBar';
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Card from './components/Card';
// import ShoppingClassDemo from './components/ShoppingClassDemo';
// import FormikDemo from './components/FormikDemo';
// import Homes from './components/Home'
// import News from './components/News';
// import Ecommerce from './components/Ecommerce';
// import Jqueryajaxdemo from './components/Jqueryajaxdemo';
import SpaComponent from './components/SpaComponent';
import IshopIndex from './ishop/IshopIndex';
import Comedy from './NetflixClone/Comedy';
import Header from './NetflixClone/Header';
import TopTrending from './NetflixClone/TopTrending';
import BlogApp from './BlogApp/BlogApp';


function App() {
  return (
    <div>
     <BlogApp />    
    </div>
    
    // <BrowserRouter>
    // < NavBar />
    // <div className="App">
    // <Routes>
    //   <Route path='/Home' element={<Home />} />
    //   <Route path='/About' element={<About />} />
    //   <Route path='/Contact' element={<Contact />} />
    //   <Route path='/:id' element={<Card />} />
    // </Routes>
    // </div>
    // </BrowserRouter>
  );
}

export default App;
