import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import CreatePost from "./CreatePost";
import HomePage from "./HomePage";
import Login from "./Login";


function App() {

 
  const [loggedIn, setLoggedIn] = React.useState(false);

  // const navigate = useNavigate()

  //  useNavigate()
  // 1)It should be kept in the component directly
  // 2)Not all the compnents can make use of useNavigate()

  // loggedIn = true

  function signout()
  {
    //Navigate to login page
    // console.log(window.location.pathname)
    window.location.pathname = "/login"
  }

  return (
  <div>
    
    <BrowserRouter>
       <div><Link to="home">Home</Link></div>
        <div><Link to="create">Create Post</Link>
      </div>
      
      
      {loggedIn ? <button onClick={signout}>Logout</button> : <Link to="/login">Login</Link>}

      <Routes>
        <Route path="home" element={<HomePage/>}></Route>
        <Route path="create" element={<CreatePost/>}></Route>
        <Route path="login" element={<Login data={setLoggedIn}/>}></Route>
      </Routes>

    </BrowserRouter>

  </div>
  );
}

export default App;

// install firebase(npm install firebase)